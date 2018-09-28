import React, { Component } from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import ListView from '../ListView'

//importing styles
import './style.css';

class ListContainer extends Component {
    render() {
        return (
            <div className="listContainer">
                <Pivot className="listTab">
                    <PivotItem linkText="List View">
                        <ListView />
                    </PivotItem>
                    <PivotItem linkText="Schedule View">
                        <p>Schedule View</p>
                    </PivotItem>
                    <PivotItem linkText="Additional Information">
                        <p>Additional Information</p>
                    </PivotItem>
                </Pivot>
            </div>
        )
    }
}

export default ListContainer;