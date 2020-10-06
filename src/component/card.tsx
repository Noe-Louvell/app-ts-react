import React from 'react';
import CardInterface from '../interface/interfaces';
import styled from 'styled-components'


const SkeletonCard = styled.div
    ` 
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    width: 20%;
    margin-bottom: 2%;
    -webkit-box-shadow: 7px 10px 28px -2px rgba(0,0,0,0.63);
    -moz-box-shadow: 7px 10px 28px -2px rgba(0,0,0,0.63);
    box-shadow: 7px 10px 28px -2px rgba(0,0,0,0.63);
    color: #282c34;
`;

const CardBox = styled.div
    `
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    flex-wrap: wrap;
    `;

export interface CardProps {
    cards: CardInterface[];
}

export const Card: React.FC<CardProps> = ({ cards }: CardProps) => {
    return <CardBox>
        {cards.map((item, index) => {
            return <CardItem key={index} CardTitle={item.CardTitle}
                CardText={item.CardText}>
            </CardItem>
        })}
    </CardBox>
}

export const CardItem: React.FC<CardInterface> = ({ CardTitle, CardText }: CardInterface) => {
    return <SkeletonCard>

        <h3>{CardTitle}</h3>

        <h5>{CardText}</h5>
    </SkeletonCard>

}


