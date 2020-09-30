import React, { useState, useEffect } from 'react';


import api from '../interface/api'
import Axios from 'axios';
import { Personne } from './personne';




function Body() {


    const [apiData, setApiData] = useState<api[]>([]);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/').then(({data}) => {
            setApiData(data);
        })
    }, []);


    return (
        
        <div className="body">
            <h1>
                Ceci est un Body
        </h1>

            <h4>Avec des personnes</h4>
    
            <div className="card-box">
                <Personne datas={apiData} /> 
            </div>
        </div>
    );
}

export default Body;
