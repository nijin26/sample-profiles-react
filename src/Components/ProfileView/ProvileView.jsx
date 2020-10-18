import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {users} from '../data'

import './ProfileView.css'

function ProvileView() {
    const {id} = useParams()
    const [userData,setUserData] = useState(null)

    useEffect(() => {
        const updatedArray = users.filter(user => user.id == id)
        setUserData(updatedArray)
    },[])


    return (
      <div>
        {userData?.map((user) => (
          <div className="profile__container">
            <div className="profile__imageholder">
              <img src={user.image} alt="profile" />
            </div>

            <div className="profile__aboutsection">
              <header>
               
                  <h1>{user.name}</h1>
                  <p className="domain">{`${user.domain} in ${user.location} . Member Since ${user.createdAt}`}</p>
                
                <p>{user.about}</p>
              </header>

              <footer>
                {user.skills.map((skill) => (
                  <li className="profile__skills">{skill}</li>
                ))}
              </footer>
            </div>
          </div>
        ))}
      </div>
    );
}

export default ProvileView
