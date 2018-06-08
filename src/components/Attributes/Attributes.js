import React from 'react';
import styled from 'styled-components';
import { mod } from '../../util/mods.js'

const AttBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 250px;
    border: 2px solid #ccc;
    margin: .5em;
    border-radius: 5px;
    color: #666;
`;

const AttRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    position: relative;
    border-bottom: 1px solid #ccc;
`;

const AttName = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    writing-mode: tb-rl;
    height: auto;
    width: 1em;
    padding: 0 1em;
    align-self: center;
    // border-right: 1px solid #ccc;
`;

const AttVal = styled.span`
    font-size: 2em;
    text-align: right;
    display: block;
    width: 1.25em;
    padding: 0 .5em;
    // border-right: 1px solid #ccc;
`;

const AttHead = styled.span`
    font-size: 10px;
    text-align: center;
    display: block;
    width: 2.5rem;
    padding: 0 1rem;
`;

class Attributes extends React.Component {

    // TODO: Make vertical and horizontal options

    render() {
        const { attributes } = this.props;
        return (
            <AttBox>
                    <AttRow>
                        <AttName></AttName>
                        <AttHead>Score</AttHead>
                        <AttHead>Mod</AttHead>
                        <AttHead>Save</AttHead>
                    </AttRow>
                {attributes.map(att => (
                    <AttRow key={att.name}>
                        <AttName>{att.name.slice(0, 3)}</AttName>
                        <AttVal>{att.val}</AttVal>
                        <AttVal>{mod(att.val)}</AttVal>
                        {att.class &&
                            <AttVal>{mod(att.val)}</AttVal>
                        }
                    </AttRow>
                ))}

            </AttBox>
        )
    }
}

export default Attributes;