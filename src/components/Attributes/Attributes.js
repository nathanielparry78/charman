import React from 'react';
import styled from 'styled-components';
import { mod } from '../../util/mods.js'

const AttBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    border: 2px solid #ccc;
    margin: .5em;
    border-radius: 5px;
    color: #666;
    z-index: 10;
    background: white;
`;

const AttRow = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    position: relative;
    border-right: 1px solid #ccc;

    ${({end}) => (end ? `justify-content: flex-end; width: 30px;` : null)};
`;

const AttName = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    height: auto;
    padding: 0 1em;
    align-self: center;
    text-align: center;
    font-weight: 600;
    // border-right: 1px solid #ccc;
`;

const AttVal = styled.span`
    font-size: 1.75em;
    text-align: center;
    display: block;
    width: 1.25em;
    padding: .25em 0;

    ${({att}) => (att ? `color: #999` : null)};
    ${({mod}) => (mod ? `color: maroon; ` : null)};
    ${({save}) => (save ? `color: green` : null)};

`;

const AttHead = styled.span`
    font-size: 12px;
    writing-mode: tb-rl;
    height: 2.5rem;
    padding: 0 1rem;
    font-variant: small-caps;
    margin-bottom: 5px;

    ${({mod}) => (mod ? `color: maroon` : null)};
    ${({att}) => (att ? `color: #999` : null)};
    ${({save}) => (save ? `color: green` : null)};
`;

class Attributes extends React.Component {

    // TODO: Make vertical and horizontal options

    render() {
        const { attributes, saves } = this.props;
        return (
            <AttBox>
                    <AttRow end>
                        <AttName></AttName>
                        <AttHead att>Score</AttHead>
                        <AttHead mod>Mod</AttHead>
                        {saves &&
                            <AttHead save>Save</AttHead>
                        }
                    </AttRow>
                {attributes.map(att => (
                    <AttRow key={att.name}>
                        <AttName>{att.name.slice(0, 3)}</AttName>
                        <AttVal att>{att.val}</AttVal>
                        <AttVal mod>{mod(att.val)}</AttVal>
                        {att.class &&
                            <AttVal save>{mod(att.val)}</AttVal>
                        }
                    </AttRow>
                ))}

            </AttBox>
        )
    }
}

export default Attributes;