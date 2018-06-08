import React from 'react';
import styled from 'styled-components';
import { mod } from '../../util/mods.js'

const SkillBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 310px;
    width: calc(100% - 1.5em);
    padding: 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin: .5em;
`;

const SkillEntry = styled.li`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: .25em 1em;
    justify-content: space-between;
    align-items: flex-start;
    line-height: 1.9;
    font-size: 18px;
    list-style: none;
    border-bottom: 1px solid #ddd;
    color: #666;

    ${({prof}) => (prof === true
        ? `font-weight: 400;
            color: maroon`
        : null)};

    & .att {
        font-size: 10px;
        color: #888;

        ${({prof}) => (prof === true
            ? `font-weight: 400;
                color: maroon`
            : null)};
    }
`

class Skills extends React.Component {
    constructor(props){
        super(props);

        this.state={
            active: {},
            skills: []
        }
    }

    componentDidMount() {
        let { attributes } = this.props;
        let skills = [];

        attributes.map(att => {
            let attMod = mod(att.val);
            let attName = att.name.toUpperCase().slice(0, 3);

            return att.skills.map(skill => (
                skills.push({...skill, attMod, attName})
            ))
        })

        this.setState({
            skills: skills.sort((a, b) => ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0))
        })
    }

    toggleActive = (e) => {
        this.setState({
            active: e.target
        })
    }

    render() {
        const { info } = this.props;

        let profBonus = parseInt(info.proficiencyBonus, 10)

        return (
            <SkillBox>
               { this.state.skills.map(skill => (
                <SkillEntry key={skill.name} prof={skill.prof} onClick={this.toggleActive}>
                    <div className="name">{skill.name} <span className="att">({skill.attName})</span></div>
                    <span>
                        { skill.prof
                            ? (parseInt(skill.attMod, 10) + profBonus) > 0
                                ? '+' + (parseInt(skill.attMod, 10) + profBonus)
                                : (parseInt(skill.attMod, 10) + profBonus)
                            : parseInt(skill.attMod, 10) > 0
                                ? '+' + parseInt(skill.attMod, 10)
                                : parseInt(skill.attMod, 10)
                        }
                    </span>
                </SkillEntry>
               ))}
            </SkillBox>
        )
    }
}

export default Skills;