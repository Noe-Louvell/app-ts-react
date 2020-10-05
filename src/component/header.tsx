import React from 'react';

import { Card } from './card'
import styled from 'styled-components'

const HeaderStyle = styled.div
    ` background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Title = styled.h1 
`
    text-transform: uppercase;
    font-size:1.5em;
`;
const SubTitle = styled.h4 
`
    font-size:1em;
`;

const headerCard = [
    {
        CardTitle: "Premier projet",
        CardText: "Ah Oui",
    },
    {
        CardTitle: "Deuxième projet",
        CardText: "Ah Non",
    }
]


function Header() {
    return (
        <HeaderStyle>

            <Title> Ceci est un Header </Title>
            <SubTitle>Avec des cards</SubTitle>

            <Card cards={headerCard} />
        </HeaderStyle>
    );
}

export default Header;
