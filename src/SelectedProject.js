import React from 'react'
import {Link, useParams} from 'react-router-dom'
import data from './data'
import './SelectedProject.css'


function SelectedProject(props) {
    const { index } = useParams()
    const place = data[index]

    return (
        <div className='Selected-Project'>
            <div className="image">
                <img alt="" src={`${process.env.PUBLIC_URL}${place.image}`} width="auto" height="400" /> 
            </div>
            <h3>{place.title}</h3>
            <p>{place.desc}</p>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default SelectedProject