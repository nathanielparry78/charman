import React from 'react';
// import styled from 'styled-components';


class CharConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            raw: {},
            parsed: {}
        }
    }

    componentDidMount() {
        const char = fetch("./char.json")
            .then(response => (
                // console.log("response", response.json())
                response.json()
            ))
            .then(char => {
                let { age,
                    alignment,
                    attack,
                    classes,
                    currencies,
                    defense,
                    experience,
                    eyes,
                    faith,
                    features,
                    gender,
                    hair,
                    height,
                    hitPoints,
                    inspiration,
                    inventory,
                    languages,
                    level,
                    lifestyle,
                    name,
                    notes,
                    organization,
                    pactMagic,
                    player,
                    proficiencyBonus,
                    race,
                    size,
                    skin,
                    spellSlots,
                    stats,
                    traits,
                    weight,
                    weightSpeeds,
                    wildshapes
                } = char.character;

                let character = {
                    info: {
                        age,
                        alignment,
                        eyes,
                        faith,
                        gender,
                        hair,
                        height,
                        level,
                        name,
                        player,
                        race,
                        size,
                        skin,
                        weight,
                    },
                    gear: {
                        currencies,
                        inventory,
                    },
                    attack,
                    classes,
                    defense,
                    experience,
                    features,
                    hitPoints,
                    inspiration,
                    languages,
                    lifestyle,
                    notes,
                    organization,
                    pactMagic,
                    proficiencyBonus,
                    spellSlots,
                    stats,
                    traits,
                    weightSpeeds,
                    wildshapes};

                this.setState({ raw: character })

            })

    }

    handleTransform = () => {

        console.log({...this.state.raw})
    }

    render() {
        // const {  } = this.props;
        console.log(this.state.raw)
        return (
            <div style={{color: "#fff"}}>
                hi
            </div>
        )
    }
}

export default CharConverter;