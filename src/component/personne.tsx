import React from 'react';
import styled from 'styled-components'
import api from '../interface/api';



const CardBox = styled.div
    `
    margin-top: 2%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align:center
    
    
    `;

const SkeletonCard = styled.div
    ` 
    margin-right:2%;
    margin-left:2%;
    background-color: #008ba2;
    height: 16em;
    padding: 10px;
    border-radius: 10px;
    width: 20%;
    margin-bottom: 2%;
    -webkit-box-shadow: 7px 10px 28px -2px rgba(0,0,0,0.63);
    -moz-box-shadow: 7px 10px 28px -2px rgba(0,0,0,0.63);
    box-shadow: 7px 10px 28px -2px rgba(0,0,0,0.63);
    color: white;
    
    :hover{
        background-color: #bbd030;
        
        #TitreCard{
            visibility: hidden;
        }
        
        #IDCard{
            visibility: hidden;
        }
        
        #TextCard{
            visibility: visible;
        }
    } 
`;


const ContenuCard = styled.div
    `
    margin-top: 30px;
    display: flex;
    min-height: 150px ;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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

const TextCard = styled.p
    `
    z-index:50;
    position:relative;
    visibility: hidden;
    position:relative;
    bottom:50%;
    text-align:center;
    
    
`;

export interface PersonneProps {
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

export const PersonneItem: React.FC<api> = ({ userId, id, title, body, option = "Default Option" }: api) => {
    return <SkeletonCard>

        <ContenuCard>

            <TitreCard id="TitreCard">
                <h4 >{title}</h4>
            </TitreCard>



            <IDCard id="IDCard">
                <h5>User : {userId}</h5>
                <h5>Id : {id}</h5>
                <h5>Option : {option}</h5>
            </IDCard>



        </ContenuCard>

        <TextCard id="TextCard"> {body}</TextCard>



    </SkeletonCard>
}

