import React from 'react';
import styled from 'styled-components';

import CharIcon from './char-icon-black.png';
import MonIcon from './monster-icon-black.png';

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 2vh;
    left: 50%;
    z-index: 100;
`;

const Items = styled.div`
    display: flex;
    width: 60vw;
    justify-content: space-around;
    position: absolute;
    bottom: -500px;
    transition: bottom .1s;

    ${({active}) => (active ? `bottom: 10vh;` : null)};

`;

const Dot = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #cccccc;
    color: transparent;
    background-position: -12px -12px;
    position: absolute;
    bottom: 2vh;
    cursor: pointer;
    opacity: .3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .15s;
    font-size: 10px;
    user-select: none;

    ${({active}) => (active
        ? `transform: scale(2);
            opacity: 1;`
        : null
    )};
`;

const MenuItem = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    opacity: 0;
    line-height: 2.25;
    transition: all .25s;
    padding: 10px;
    user-select: none;
    display: block;
    background-color: #7ecae3;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    background-position: center center;

    ${({active}) => (active ? `transform: scale(2.25); opacity: .8;` : null)};
    ${({img}) => (img ? `background-image: url(${img})` : null)};

    &:hover{
        transform: scale(2.5);
        opacity: 1;
    }
`;


class Nav extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            active: false
        }
    }

    toggleNav = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleNav = (type) => {
        this.props.handlePageStatus(type);
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        let { handlePageStatus } = this.props;
        let { active } = this.state;
        return (
            <NavContainer>
                <Dot onClick={this.toggleNav} active={active}>+</Dot>
                <Items active={active}>
                    <MenuItem img={CharIcon} active={active} onClick={() => this.handleNav('char')} />
                    <MenuItem img={MonIcon} active={active} onClick={() => this.handleNav('mon')} right/>
                </Items>
            </NavContainer>
        )
    }
}

export default Nav;