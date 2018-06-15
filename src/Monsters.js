import React, { Component } from 'react';
import styled from 'styled-components';
import Monster from './components/Monster/Monster';
import Filters from './components/Filters/Filters'



const Form = styled.form`
    position: fixed;
    width: 100%;
    color: maroon;
    z-index: 100;
`;

const FilterButton = styled.span`
    position: absolute;
    height: 30px;
    width: 30px;
    left: 1em;
    top: 7px;
    cursor: pointer;
    padding: .25em;

    ${({active}) => active
        ?   `border: 1px solid #ccc;
            border-bottom: 2px solid white;`
        :   null
    }
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

const TotalResults = styled.span`
    position: absolute;
    top: 20px;
    left: 5em;
    font-size: 12px;


    ${({hasResults}) => hasResults
        ? `color: maroon`
        : `color: #ccc;`
    }
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
            filterValue: '',
            showFilters: false,
            filters: {}
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
            filterValue: '',
            filters: {}
        })
        // document.getElementById('form').blur();
        // document.getElementById('filter').blur();
        // document.getElementById('submit').blur();
        e.preventDefault();
    }

    toggleFilters = () => {
        this.setState({
            showFilters: !this.state.showFilters
        })
    }

    handleFilters = (filterProps) => {
        let { type, size, cr } = filterProps;
        let { monsterCatalog, filteredCatalog } = this.state;
        let filtered = [];

        if (type !== undefined && type !== '') {
            console.log("type")
            filtered.length < 1
                ?   filteredCatalog.length > 0
                        ? filtered = filteredCatalog.filter((monster) => {
                            return monster.type === type
                        })
                        : filtered = monsterCatalog.filter((monster) => {
                            return monster.type === type
                        })
                :   filtered = filtered.filter((monster) => {
                        return monster.type === type
                    })
        }

        if (size !== undefined && size !== '') {
            console.log("size")

            filtered.length < 1
                ?   filteredCatalog.length > 0
                        ? filtered = filteredCatalog.filter((monster) => {
                            return monster.size === size
                        })
                        : filtered = monsterCatalog.filter((monster) => {
                            return monster.size === size
                        })
                :   filtered = filtered.filter((monster) => {
                        return monster.type === type
                    })
        }

        if (cr !== undefined && cr !== '') {
            console.log("cr")

            filtered.length < 1
                ?   filteredCatalog.length > 0
                        ? filtered = filteredCatalog.filter((monster) => {
                            return monster.challenge_rating === cr
                        })
                        : filtered = monsterCatalog.filter((monster) => {
                            return monster.challenge_rating === cr
                        })
                :   filtered = filtered.filter((monster) => {
                        return monster.challenge_rating === cr
                    })

        }

        this.setState({
            // filters: filterProps
            filteredCatalog: filtered,
            filters: filterProps
        })
        console.log(filterProps)
    }

    render() {
        let { monsterCatalog, filteredCatalog, showFilters, filters } = this.state;

        return (
        <div>
            <Form onSubmit={this.handleFilter} id="form" >
                <FilterButton onClick={this.toggleFilters} active={showFilters}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.25,13 L19.25,20.249479 C19.25,20.6639803 18.9171014,21 18.5,21 C18.0857864,21 17.75,20.6564991 17.75,20.249479 L17.75,13 L16.9998075,13 C16.4476291,13 16,12.5561352 16,12 C16,11.4477153 16.4437166,11 16.9998075,11 L20.0001925,11 C20.5523709,11 21,11.4438648 21,12 C21,12.5522847 20.5562834,13 20.0001925,13 L19.25,13 Z M19.25,10 L19.25,3.75052097 C19.25,3.34350085 18.9142136,3 18.5,3 C18.0828986,3 17.75,3.33601969 17.75,3.75052097 L17.75,10 L19.25,10 Z M6.25,9 L6.25,20.249479 C6.25,20.6639803 5.91710139,21 5.5,21 C5.08578644,21 4.75,20.6564991 4.75,20.249479 L4.75,9 L3.99980749,9 C3.44762906,9 3,8.55613518 3,8 C3,7.44771525 3.44371665,7 3.99980749,7 L7.00019251,7 C7.55237094,7 8,7.44386482 8,8 C8,8.55228475 7.55628335,9 7.00019251,9 L6.25,9 Z M6.25,6 L6.25,3.75052097 C6.25,3.34350085 5.91421356,3 5.5,3 C5.08289861,3 4.75,3.33601969 4.75,3.75052097 L4.75,6 L6.25,6 Z M12.75,18 L12.75,20.249479 C12.75,20.6639803 12.4171014,21 12,21 C11.5857864,21 11.25,20.6564991 11.25,20.249479 L11.25,18 L10.4998075,18 C9.94762906,18 9.5,17.5561352 9.5,17 C9.5,16.4477153 9.94371665,16 10.4998075,16 L13.5001925,16 C14.0523709,16 14.5,16.4438648 14.5,17 C14.5,17.5522847 14.0562834,18 13.5001925,18 L12.75,18 Z M12.75,15 L12.75,3.75052097 C12.75,3.34350085 12.4142136,3 12,3 C11.5828986,3 11.25,3.33601969 11.25,3.75052097 L11.25,15 L12.75,15 Z" fill={showFilters ? "maroon" : "#ccc"}></path></svg>
                </FilterButton>
                <TotalResults hasResults={filteredCatalog.length > 0}>
                    {filteredCatalog.length} Results
                </TotalResults>
                <Filter placeholder="Enter creature name" type="text" onChange={this.handleChange} id="filter"/>
                <Submit type="submit" id="submit" onClick={() => document.getElementById('filter').blur()}/>
                <Clear class="close-icon" type="reset" onClick={() => document.getElementById('filter').focus()}>&#x2715;</Clear>
            </Form>

            {showFilters &&
                <Filters toggleFilters={this.toggleFilters} handleFilters={(filterProps) => this.handleFilters(filterProps)} filters={filters}/>
            }

            <Results>
                { monsterCatalog.length > 0 && filteredCatalog.length > 0 &&
                    filteredCatalog.map((monster, i) => (
                        <Monster beast={monster} key={monster.name + i}/>
                    ))
                }
            </Results>
        </div>
        );
    }
}

export default Monsters;
