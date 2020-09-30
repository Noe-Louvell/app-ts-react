import React from 'react';

import api from '../interface/api';
interface PersonneProps {
    datas: api[];
}

export const Personne: React.FC<PersonneProps> = ({ datas }: PersonneProps) => {

    return <div className="card-box">


        {datas.map(({ id, userId, title, body }) => {
            return <PersonneItem key={id} userId={userId}
                id={id}
                title={title}
                body={body}>

            </PersonneItem>
        })}
    </div>

}

const PersonneItem: React.FC<api> = ({ userId, id, title, body, option = "Default Option" }: api) => {
    return <div className="skeleton-card">

        <div className="title-card">
            <h4 >{title}</h4>
            <h5>{body}</h5>
        </div>

        

        <div className="id-card">
            <h5>User : {userId}</h5>
            <h5>Id : {id}</h5>
            <h5>Option : {option}</h5>
        </div>
    </div>
}

