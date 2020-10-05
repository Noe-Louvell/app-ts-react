import React from 'react';
import styled from 'styled-components'
import api from '../interface/api';


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
    color: darkslategray;

    :hover{
        background-color: darkslategray;
        color:white;

        .fizPPz{
            visibility: hidden;
        }
        
        .hHBHJR{
            visibility: hidden;
        }
        
    } 

    
`;

const CardBox = styled.div
    `
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    flex-wrap: wrap;
    
    
    `;

const TitreCard = styled.div
    `
    display: flex;
    justify-content: center;
    flex-direction: column;

    h4{
        font-size: 1em;
        justify-content: start;
        
    }
`;


const IDCard = styled.div
    `
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    h5{
        font-size: 1em;
        margin-bottom:0;
        margin-top:0;
    }

    
`;
interface PersonneProps {
    datas: api[];
}

export const Personne: React.FC<PersonneProps> = ({ datas }: PersonneProps) => {

    return <CardBox>


        {datas.map(({ id, userId, title, body }) => {
            return <PersonneItem key={id} userId={userId}
                id={id}
                title={title}
                body={body}>

            </PersonneItem>
        })}
    </CardBox>

}

const PersonneItem: React.FC<api> = ({ userId, id, title, body, option = "Default Option" }: api) => {
    return <SkeletonCard>

        <TitreCard>
            <h4 >{title}</h4>
        </TitreCard>



        <IDCard>
            <h5>User : {userId}</h5>
            <h5>Id : {id}</h5>
            <h5>Option : {option}</h5>
        </IDCard>
    </SkeletonCard>
}

