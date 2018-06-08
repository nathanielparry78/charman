import React, { Component } from 'react';
import styled from 'styled-components';
import Char from './Char';
import Monsters from './Monsters';
import Nav from './components/Nav/Nav.js';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'mon'
        }
    }

    handlePageStatus = (type) => {
        this.setState({
            status: `${type}`
        })
    }


    render() {
        let { status } = this.state;

        return (
            <div className="App" id="app">
                {status === 'char' ? <Char /> : null}
                {status === 'mon' ? <Monsters /> : null}

                <Nav handlePageStatus={this.handlePageStatus}/>
            </div>
        );
    }
}

export default App;
