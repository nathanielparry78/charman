import React from 'react';
import styled from 'styled-components';

import calculator from './calculator.png'

const Amount = ({ className, status, num, caption, onClick }) => (
    <div className={className} onClick={onClick} status={ status !== undefined ? `${status}` : null }>
        <span className="value">{num}</span>
        <span className="caption">{caption}</span>
    </div>
)

const HPTracking = styled.div`
    height: 200px;
    width: 130px;
    border: 2px solid #ccc;
    margin: .5em;
    border-radius: 5px;
`;

const Head = styled.h2`
    width: 100%;
    border-bottom: 1px solid #bbb;
    margin: 0;
    color: #666;
`;

const HPBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: stretch;
    font-size: 2em;
    border-bottom: 1px solid #bbb;

    & .caption {
        font-size: 10px;
        padding: 3px 0 5px;
    }
`;

const Current = styled(Amount)`
    border-right: 1px solid #ccc;
    width: 64px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    ${ props => (props.status === 'danger' && props.status !== 'temp')
        ? `color: red`
        : `color: green`
    }

    ${ props => (props.status === 'temp' && props.status !== 'danger')
        ? `color: blue`
        : `color: green`
    }
`;

const Total = styled(Amount)`
    border-left: 1px solid #ccc;
    width: 64px;
    color: #999;
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled.span`
    font-size: 2em;
    cursor: pointer;
    user-select: none;
    padding: .25em;
    color: #bbb;

    &:hover {
        color: maroon;
    }
`;

const Controls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    border-bottom: 1px solid #ddd;
`;

const Calc = styled.span`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    cursor: pointer;

    & img {
        height: 32px;
        width: auto;
    }
`;
const Calculator = styled.div`
    position: fixed;
    top: 3em;
    left: 25vw;
    width: 200px;
    height: auto;
    border: 1px solid #ddd;
    background: white;
    box-shadow: 3px 3px 15px #666;
    display: flex;
    flex-direction: column;
    padding: .5em;
    z-index: 100;

    & input {
        padding: 1em;
        font-size: 2em;
        width: 133px;
        margin: 0 auto;
        border: none;
        text-align: center;

        &::-webkit-input-placeholder {
            color: #eee;
            font-size: .75em;
        }

        &:focus {
            outline: none;
        }
    }
`;

const ButtonBlock = styled.div`
    &:before {
        display: block;
        content: '';
        position: relative;
        margin-top: -1.5em;
        margin-bottom: .5em;
        left: 20px;
        width: 80%;
        height: 2px;
        background: #666;
    }
`;

const HPButton = styled.span`
    display: inline-block;
    padding: .75em;
    margin: .5em;
    border: 1px solid #888;
    border-radius: 5px;
    background: maroon;
    color: white;
`;

const Close = styled.span`
    text-align: center;
    font-size: 1.25em;
    position: absolute;
    padding: .5em;
    top: 5px;
    right: 5px;
    cursor: pointer;
    color: skyblue;
`;


class HPTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 206,
            current: 10,
            calcVisible: false,
            enteredHP: 0
        }
    }

    increase = () => {
        this.setState({
            current: this.state.current + 1
        })
    }

    decrease = () => {
        this.setState({
            current: this.state.current - 1
        })
    }

    toggleCalc = () => {
        this.setState({
            calcVisible: !this.state.calcVisible
        })
    }

    enterHP = (e) => {
        this.setState({
            enteredHP: parseInt(e.target.value, 10)
        })
    }

    addHP = () => {
        this.setState({
            current: this.state.current + this.state.enteredHP,
            calcVisible: false,
            enteredHP: 0
        })
    }

    subtractHP = () => {
        this.setState({
            current: this.state.current - this.state.enteredHP,
            calcVisible: false,
            enteredHP: 0
        })
    }

    setHP = () => {
        this.setState({
            current: this.state.enteredHP,
            calcVisible: false,
            enteredHP: 0
        })
    }

    render() {
        const { total, current, calcVisible } = this.state;

        const status = () => {
            if ( current < ( total / 3 )) {
                return "danger"
            }
            if ( current > ( total ) ) {
                return "temp"
            }
        }

        return (
            <HPTracking>
                <Head>HP</Head>
                <HPBox>
                    <Current status={status()} num={current} caption={"Current"} onClick={this.toggleCalc}/>
                    <Total num={total} caption={"Total"}/>
                </HPBox>
                <Controls>
                    <StyledButton onClick={this.decrease}>-</StyledButton>
                    <StyledButton onClick={this.increase}>+</StyledButton>
                </Controls>
                <Calc>
                    <img src={calculator} onClick={this.toggleCalc} alt=''/>
                </Calc>
                {calcVisible &&
                    <Calculator>
                        <Close onClick={this.toggleCalc}>X</Close>
                        <input type="number" inputMode="numeric" onChange={this.enterHP} placeholder="Value"/>
                        <ButtonBlock>
                            <HPButton onClick={this.addHP}>ADD HP</HPButton>
                            <HPButton onClick={this.subtractHP}>SUBTRACT HP</HPButton>
                            <HPButton onClick={this.setHP}>SET HP</HPButton>
                        </ButtonBlock>
                    </Calculator>
                }
            </HPTracking>
        )
    }
}

export default HPTracker;