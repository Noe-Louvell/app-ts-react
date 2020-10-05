import React, { useState, useEffect } from 'react';


import api from '../interface/api'
import Axios from 'axios';
import { Personne } from './personne';
import styled from 'styled-components'

const  BodyStyle = styled.div
    `
    background-color: darkslategray;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    `;



function Body() {


    const [apiData, setApiData] = useState<api[]>([]);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/').then(({ data }) => {
            setApiData(data);
        })
    }, []);

    return (
        <BodyStyle>
            <h1>
                Ceci est un Body
        </h1>
            <h4>Avec des personnes</h4>
            
                <Personne datas={apiData} />
            
        </BodyStyle>
    );
}

export default Body;
