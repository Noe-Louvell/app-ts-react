import React from 'react';
import CardInterface from '../interface/interfaces';

interface CardProps {
    cards: CardInterface[];
}

export const Card: React.FC<CardProps> = ({ cards }: CardProps) => {

    return <div className="card-box">


        {cards.map((item,index) => {
            return <CardItem key={index} CardTitle={item.CardTitle}
                CardText={item.CardText}>

            </CardItem>
        })}

    </div>

}

const CardItem: React.FC<CardInterface> = ({ CardTitle, CardText }: CardInterface) => {
    return <div className="skeleton-card">
    
                <h3>{CardTitle}</h3>
            
                <h5>{CardText}</h5>      
    </div>

}
