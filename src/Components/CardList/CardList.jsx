import React from 'react'
import {users} from '../data'

import Card from './Card/Card'

import './CardList.css'

function CardList() {

    return (
        <div className="cardlist__container">
            {users.map(user => <Card id={user.id} name={user.name} image={user.image} online={user.online} about={user.about} skills={user.skills} available={user.available} seen={user.lastseeen} />)}
        </div>
        
    )
}

export default CardList
