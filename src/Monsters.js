import React, { Component } from 'react';
import styled from 'styled-components';
import Monster from './components/Monster/Monster';



const Form = styled.form`
    position: fixed;
    width: 100%;
    color: maroon;
    z-index: 100;
`;

const Filter = styled.input`
    font-size: 1.25em;
    padding: .5em;
    background: white;
    z-index: 500;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    color: maroon;
`;

const Submit = styled.input`
    visibility: hidden;
`;

const Results = styled.div`
`;

const Clear = styled.button`
    border-radius: 50%;
    height: 25px;
    width: 25px;
    display: flex;
    position: absolute;
    right: 1em;
    top: 10px;
    background: #eee;
    color: #666;
    box-shadow: none;
    border-color: transparent;
`;

class Monsters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsterCatalog: [],
            filteredCatalog: [],
            filterValue: ''
        }
    }

    componentDidMount() {
        fetch("5e-SRD-Monsters.json")
            .then(response => (
                response.json()
            ))
            .then(catalog =>
                this.setState({ monsterCatalog: catalog })
            )
    }

    handleChange = (e) => {
        this.setState({
            filterValue: e.target.value
        })
    }

    handleFilter = (e) => {
        let filtered = [];
        this.state.monsterCatalog.filter(monster => {
           return monster.name && monster.name.toLowerCase().includes(this.state.filterValue.toLowerCase()) ? filtered.push(monster) : null
        })

        this.setState({
            filteredCatalog: filtered,
            filterValue: ''
        })
        // document.getElementById('form').blur();
        // document.getElementById('filter').blur();
        // document.getElementById('submit').blur();
        e.preventDefault();
    }

    render() {
        let { monsterCatalog, filteredCatalog } = this.state;

        return (
        <div>
            <Form onSubmit={this.handleFilter} id="form" >
                <Filter placeholder="Enter monster name" type="text" onChange={this.handleChange} id="filter"/>
                <Submit type="submit" id="submit" onClick={() => document.getElementById('filter').blur()}/>
                <Clear class="close-icon" type="reset" onClick={() => document.getElementById('filter').focus()}>&#x2715;</Clear>
            </Form>

            <Results>
                { monsterCatalog.length > 0 && filteredCatalog.length > 0 &&
                    this.state.filteredCatalog.map((monster, i) => (
                        <Monster beast={monster} key={monster.name + i}/>
                    ))
                }
            </Results>
        </div>
        );
    }
}

export default Monsters;
