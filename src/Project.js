import { Link } from 'react-router-dom'
import React from 'react'
import './Project.css'

function Project(props) {
    return (
        <div className="Project">
            <img src={props.image} width="300" height="auto" />
            <h3>{props.title}</h3>
            <Link to={props.link}>About {props.title}</Link>
        </div>            
    )
}

export default Project