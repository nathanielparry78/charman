import React from 'react';
import styled from 'styled-components';
// import { mod } from '../../util/mods.js'

const CombatInfoBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 168px;
    width: 80px;
    padding: 1em 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin: .5em;
    color: #666;
`;

const ACBlock = styled.div`
    background: url('./images/shield.png') no-repeat;
    background-size: 110px 85px;
    background-position: center;
    height: 85px;
    width: 100%;
    font-size: 2em;
    padding-top: .85em;
    margin-top: -.75em;
`;

const InitBlock = styled.div`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    margin: .25em;
    padding: .25em;

    & .caption {
        font-size: 10px;
        color: #888;
        margin-top: .5em;
    }
`;



class CombatInfo extends React.Component {

    render() {
        const { AC, initBonus } = this.props;
        return (
            <CombatInfoBox>
                <ACBlock>{AC}</ACBlock>
                <InitBlock>
                    {initBonus}
                    <span className="caption">INITIATIVE</span>
                </InitBlock>
            </CombatInfoBox>
        )
    }
}

export default CombatInfo;