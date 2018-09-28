import React, { Component } from 'react';
import ListContainer from '../ListConatiner'

//importing styles
import './style.css';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <ListContainer />
            </div>
        )
    }
}

export default Main;