import React from 'react'
import {Link} from 'react-router-dom'

import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Card.css'

function Card({id,image,about,skills,seen,available,online}) {
    return (
      <div className="card__container">
        <h1 className="card__badge">
          <FontAwesomeIcon icon={faCertificate} />
        </h1>
        <div className="card__header">
          <img src={image} alt="" />
          {online && <span className="card__onlineStatus"></span>}
          <p className="card__about">{`${about.substring(0, 100)}......`}</p>
        </div>
        <div>
          {skills.slice(0, 4).map((skill) => (
            <li className="card__skill">{skill}</li>
          ))}
        </div>
        <footer>
          <Link className="card__button" disabled={available} to={`/user/${id}`}>
            Available Now
          </Link>
          <p style={{ width: "100%" }} className="card__lastseen">
            Last Seen {seen} days ago
          </p>
        </footer>
      </div>
    );
}

export default Card
