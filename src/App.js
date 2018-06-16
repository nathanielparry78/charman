import React, { Component } from 'react';
import styled from 'styled-components';
import Char from './Char';
import Monsters from './Monsters';
import Nav from './components/Nav/Nav.js';

import './App.css';
import CharConverter from './components/CharConverter/CharConverter';

const Items = () => {}
const Spells = () => {}

const Main = styled.main`
    background: #232323;
    width: 100vw;
    height: 100vh;
`;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'charCon'
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
            <Main className="App" id="app">
                {status === 'char' ? <Char /> : null}
                {status === 'mon' ? <Monsters /> : null}
                {status === 'item' ? <Items /> : null}
                {status === 'spells' ? <Spells /> : null}
                {status === 'charCon' ? <CharConverter /> : null}

                <Nav handlePageStatus={this.handlePageStatus}/>
            </Main>
        );
    }
}

export default App;
