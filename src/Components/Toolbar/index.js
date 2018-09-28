import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import DatePicker from '../DatePicker'

//importing styles
import './style.css';

class ToolBar extends Component {

    handleSend = () => {
        alert('sent')
    }

    handleDropDown = (e) => {
        console.log(e)
    }
    DropdownChanged = (e) => {
        console.log('selected date', e)
    }
    render() {
        return (
            <div className="toolbar">

            <DefaultButton
                primary={true}
                data-automation-id="test"
                text="Send"
                onClick={this.handleSend}
                allowDisabledFocus={true}
            />

            <DefaultButton
            primary
            data-automation-id="test"
            text="Select"
            onClick={this.handleDropDown}
            aria-roledescription={'split button'}
            style={{ height: '35px' }}
            menuProps={{
              items: [
                {
                  key: 'bookMeetingRoom',
                  text: 'Book a meeting room (*)',
                  iconProps: { iconName: 'book' }
                },
                {
                  key: 'calendarEvent',
                  text: 'Calendar event',
                  iconProps: { iconName: 'Calendar' }
                }
              ]
            }}
          />

            <DatePicker />             
            </div>
        )
    }
}

export default ToolBar;