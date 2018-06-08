import React from 'react';
import styled from 'styled-components';
import { mod } from '../../util/mods.js';
import Attributes from '../Attributes/Attributes';

// import {beast} from './demo-data';
import Paper from './torn-paper.jpg'


const StatBlock = styled.div`
    padding-top: 100px;
    text-align: left;
    font-family: serif;
    background: linear-gradient(white, #ebebeb);

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        background: url(${Paper}) #e8e8e8 no-repeat;
        background-size: cover;
        background-position: bottom center;
        margin-top: -10px;

    }
`;

const Block = styled.div`
    border-bottom: 2px solid maroon;
    padding: .5em 1em;

    & li {
        list-style: none;
    }
`;

const Name = styled.h2`
    font-variant: small-caps;
    font-size: 2em;
    margin-bottom: 0;
    margin-top: .25em;
`;

const CR = styled.span`
    font-size: .5em;
    color: maroon;
`;

const Stat = styled.span`
    font-weight: 600;
`;

const Ability = styled.div`
    display: block;
    margin-bottom: 1em;
`;

const MiniHeading = styled.h3`
    font-variant: small-caps;
    margin: .25em 0;
    font-size: 1.5em;
    color: maroon;
`;

class Monster extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            creature: this.props.beast
        }
    }


    render() {
        let { beast = {} } = this.props;
        const { creature: { name, size, type, subtype, alignment, armor_class, hit_points, hit_dice, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, damage_vulnerabilities, damage_resistances, damage_immunities, condition_immunities, senses, skills, languages, challenge_rating, special_abilities, actions } } = this.state;

        let attributes = [
            { name: "Strength", val: strength },
            { name: "Dexterity", val: dexterity },
            { name: "Constitution", val: constitution },
            { name: "Intelligence", val: intelligence },
            { name: "Wisdom", val: wisdom },
            { name: "Charisma", val: charisma }
        ]

        return (
            <StatBlock>
                <Block>
                    <Name>{name} <CR>(CR {challenge_rating})</CR></Name>
                    <span><em>{size} {type}{subtype ? ` ${subtype}, ` : ', '}{alignment}</em></span>
                </Block>
                <Block>
                    <li><Stat>AC</Stat> {armor_class}</li>
                    <li><Stat>HP</Stat> {hit_points}  <em><small>&nbsp;({hit_dice})</small></em></li>
                    <li><Stat>Speed</Stat> {speed}</li>
                    {damage_immunities &&
                        <li><Stat>Immunities</Stat> {damage_immunities}</li>
                    }
                    {damage_resistances &&
                        <li><Stat>Resistances</Stat> {damage_resistances}</li>
                    }
                    {damage_vulnerabilities &&
                        <li><Stat>Vulnerabilities</Stat> {damage_vulnerabilities}</li>
                    }
                    {condition_immunities &&
                        <li><Stat>Condition Immunities</Stat> {condition_immunities}</li>
                    }

                </Block>

                <Attributes attributes={attributes} saves={false}/>

                <Block>
                    {skills &&
                        <li><Stat>Skills</Stat> {skills}</li>
                    }
                    {senses &&
                        <li><Stat>Senses</Stat> {senses}</li>
                    }
                    {languages &&
                        <li><Stat>Languages</Stat> {languages}</li>
                    }
                </Block>

                {actions &&
                    <Block>
                        <MiniHeading>Actions</MiniHeading>
                        {actions.map((action, i) => (
                            <Ability key={action.name + i}>
                                <Stat>{action.name}: </Stat>
                                <span>{action.desc}</span>
                            </Ability>
                        ))}
                    </Block>
                }

                {special_abilities &&
                    <Block>
                        <MiniHeading>Special Abilities</MiniHeading>
                        {special_abilities.map((ability, i) => (
                            <Ability key={ability.name + i}>
                                <Stat>{ability.name}: </Stat>
                                <span>{ability.desc}</span>
                            </Ability>
                        ))}
                    </Block>
                }
            </StatBlock>
        )
    }
}

export default Monster;