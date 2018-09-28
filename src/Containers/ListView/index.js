import React, { Component } from 'react'
import { DetailsList, DetailsListLayoutMode, Selection } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import axios from 'axios'
import { columns } from './columns'

import './style.css';

export class ListView extends Component {
  

  constructor(props) {
    super(props);


    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });

    this.state = {
        items: [],
        selectionDetails: this._getSelectionDetails()
    };
  }

  componentDidMount(){
      const e = this;
    axios.get('mock.json')
    .then(function (response) {
        e.setState({items: response.data})
    })
    .catch(function (error) {
        console.log(error);
    });
  }

   render() {
    const { selectionDetails, items } = this.state;

    return (
      <div>
        <div className="selectedList">{selectionDetails}</div>
        {items && items.length > 0 && 
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.fixedColumns}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            onItemInvoked={this._onItemInvoked}
            compact={true}
            className={'listView'}
          />
        </MarqueeSelection>
        }
      </div>
    );
  }

  _getSelectionDetails() {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      default:
        return `${selectionCount} items selected`;
    }
  }


   _onItemInvoked(item) {
    alert(`Item invoked: ${item.name}`);
  }
}


export default ListView;