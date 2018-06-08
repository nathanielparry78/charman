import React, { Component } from 'react';
import Info from './components/Info/Info.js';
import Attributes from './components/Attributes/Attributes.js';
import HPTracker from './components/HPTracker/HPTracker.js';
import Skills from './components/Skills/Skills.js';
import CombatInfo from './components/CombatInfo/CombatInfo.js';
import styled from 'styled-components';

import { demoChar } from './demoChar';
import { xpLevels } from './reference';

import './App.css';

const BodyStuff = styled.div`
    display: block;
    margin-top: 5em;
    position: absolute;
    width: 100vw;

    & .topBlock {
        display: flex;
        flex-direction: row;
    }
`;


var tappedTwice = false;

class Char extends Component {

    componentDidMount() {
        document.getElementById("app").addEventListener("touchstart", this.tapHandler, true);
    }

    tapHandler = (event)  => {
        if(!tappedTwice) {
            tappedTwice = true;
            setTimeout( function() { tappedTwice = false; }, 300 );
            return false;
        }
        event.preventDefault();
        //action on double tap goes below
        console.log('You tapped me Twice !!!');
    }

    render() {
        let { info, attributes } = demoChar;
        return (
        <div className="App" id="app">
            <Info {...info} xpLevels={xpLevels}/>
            <BodyStuff>
                <div className="topBlock">
                    <HPTracker />
                    <CombatInfo {...info} />
                </div>
                <Attributes attributes={attributes} />
                <Skills attributes={attributes} info={info}/>
            </BodyStuff>
        </div>
        );
    }
}

export default Char;
