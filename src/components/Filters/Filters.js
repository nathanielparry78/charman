import React from 'react';
import styled from 'styled-components';

const FilterBox = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1em;
    border: 1px solid #ccc;
    position: fixed;
    top: 2em;
    left: .5em;
    background: white;
    z-index: 30;

    & select {
        margin: 0.5em 0;
        height: 2em;
        font-size: 1em;
    }
`;

const GoButton = styled.span`
    position: relative;
    padding: 1em;
    border: 1px solid #ccc;
    cursor: pointer;
    width: 30%;
    right: 0;
    align-self: flex-end;
`;


class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: '',
            type: '',
            cr: ''
        }
    }

    componentDidMout() {
        let { filters: {size, type, cr} } = this.props;

        this.setState({
            size: size,
            type: type,
            cr: cr
        })
    }

    handleSizeFilter = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    handleTypeFilter = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleCRFilter = (e) => {
        this.setState({
            cr: e.target.value
        })
    }

    handleGo = () => {
        this.props.handleFilters(this.state)
        this.props.toggleFilters()
    }

    render() {
        let { size, type, cr } = this.state;
        return (
            <FilterBox>
                <select label="Size" onChange={this.handleSizeFilter} value={size}>
                    <option value="">Choose Size</option>
                    <option value="Tiny">Tiny</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Huge">Huge</option>
                    <option value="Gargantuan">Gargantuan</option>
                </select>

                <select label="type" onChange={this.handleTypeFilter} value={type}>
                    <option value="">Choose Type</option>
                    <option value="aberration">Aberration</option>
                    <option value="beast">Beast</option>
                    <option value="celestial">Celestial</option>
                    <option value="construct">Construct</option>
                    <option value="dragon">Dragon</option>
                    <option value="elemental">Elemental</option>
                    <option value="fiend">Fiend</option>
                    <option value="giant">Giant</option>
                    <option value="humanoid">Humanoid</option>
                    <option value="monstrosity">Monstrosity</option>
                    <option value="ooze">Ooze</option>
                    <option value="plant">Plant</option>
                    <option value="swarm of Tiny beasts">Swarm of Tiny beasts</option>
                    <option value="undead">Undead</option>
                </select>

                <select label="cr" onChange={this.handleCRFilter} value={cr}>
                    <option value="">Choose CR</option>
                    <option value="1/8">1/8</option>
                    <option value="1/4">1/4</option>
                    <option value="1/2">1/2</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                </select>

                <GoButton onClick={this.handleGo}>GO!</GoButton>

            </FilterBox>
        )
    }
}

export default Filters;