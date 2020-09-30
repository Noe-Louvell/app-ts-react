import React from 'react';

import {Card} from './card'

const headerCard = [
    {
        CardTitle: "Header title",
        CardText: "Header text",
    },
    {
        CardTitle: "Header title2",
        CardText: "Header text2",
    }
]


function Header() {
    return (
        <div className="header">
            <h1>
                Ceci est un Header
            </h1>
            <h4>Avec des cards</h4>
            <div className="card-box">
                <Card cards={headerCard} />
                
            </div>
        </div>
    );
}

export default Header;
