import React from 'react';
import styled from 'styled-components';

const XPProgress = styled.div`
    position: absolute;
    height: 5px;
    background: #000;
    width: 100vw;
    bottom: -2px;
    left: 0;
    z-index: 5;

    & .progress {
        position: absolute;
        height: 5px;
        background: linear-gradient(90deg, #045556, #189ea0);
        ${({progress}) => (progress ? `width: ${progress}%` : null)};
        content: '';
        z-index: 10;
        display: block;
    }

    & .totals {
        position: absolute;
        right: 5px;
        top: -13px;
        font-size: 10px;
        color: #bbb;
        font-variant: small-caps;
    }
`

const InfoBox = styled.div`
    width: calc(100% - 1em);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5em;
    position: fixed;
    // border-bottom: 2px solid #333;
    background: #666;
    color: white;
    z-index: 100;
    text-align: left;
    height: 3.75em;
    flex-wrap: wrap;
    align-content: stretch;
    box-shadow: 0 2px 8px #333;
    font-variant: small-caps;

    & .item {
        text-align: right;
    }

    & .right {
        display: flex;
        flex-direction: column;
    }
`;

const Name = styled.span`
    font-size: 1.25em;
    font-weight: 600;
    margin-left: 0em;
    display: block;
`;

const Portrait = styled.img`
    position: relative;
    height: 56px;
    width: 56px;
    object-fit: cover;
    border: 2px solid #444;
`;


class Info extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLevel: {},
            nextLevel: {}
        }
    }

    componentDidMount() {
        let { xpTotal, xpLevels } = this.props;

        const currentLevel = xpLevels.slice().reverse().find(level => parseInt(xpTotal, 10) > parseInt(level.xp, 10));
        const nextLevel = xpLevels.find(level => parseInt(xpTotal, 10) < parseInt(level.xp, 10));

        this.setState({
            currentLevel: currentLevel,
            nextLevel: nextLevel
        })
    }

    render() {
        const { name, classes, movement, xpTotal, image, proficiencyBonus } = this.props;
        const { nextLevel } = this.state;

        let progress = (parseInt(xpTotal, 10) / parseInt(nextLevel.xp, 10)) * 100;

        return (
            <InfoBox>
                <Portrait src={image.src}/>
                <Name>{name}</Name>
                <div>
                    {classes.map(item => (
                            <span key={item.class}>{item.class} ({item.level})</span>
                    ))}
                </div>
                <div className="right">
                    <span className="item">prof bonus: {proficiencyBonus}</span>
                    <span className="item">move: {movement}'</span>

                </div>
                <XPProgress progress={progress}>
                    <span className='progress' />
                    <span className="totals">{xpTotal} / {this.state.nextLevel.xp} xp</span>
                </XPProgress>
            </InfoBox>
        )
    }
}

export default Info;