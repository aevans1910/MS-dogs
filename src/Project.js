import { Link } from 'react-router-dom'
import React from 'react'
import './Project.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinHearts, faFlushed, faBatteryFull, faBatteryEmpty, faBatteryHalf, faBone, faSmile } from '@fortawesome/free-solid-svg-icons'

function getFeatureIcons(features) {
    const icons = {
        loving: <FontAwesomeIcon key='loving' icon={faGrinHearts} />,
        friendly: <FontAwesomeIcon key='friendly' icon={faSmile} />,
        nervous: <FontAwesomeIcon key='nervous' icon={faFlushed} />,
        high_energy: <FontAwesomeIcon key='high_energy' icon={faBatteryFull} />,
        medium_energy: <FontAwesomeIcon key='medium_energy' icon={faBatteryHalf} />,
        low_energy: <FontAwesomeIcon key='low_energy' icon={faBatteryEmpty} />,
        food_inclined: <FontAwesomeIcon key='food_inclined' icon={faBone} />
    }
    console.log(icons)

    return features.map(feature => icons[feature])
}

function Project(props) {
    return (
        <div className="Project">
            <img src={`${process.env.PUBLIC_URL}${props.image}`} width="300" height="auto" />
            <h3>{props.title}</h3>
            <Link to={props.link}>About {props.title}</Link>
            <p className='Project--features'>
                {getFeatureIcons(props.features)}
            </p>
        </div>            
    )
}

export default Project