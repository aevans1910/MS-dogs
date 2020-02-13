import React from 'react'
import {Link, useParams} from 'react-router-dom'
import data from './data'


function SelectedProject(props) {
    const { index } = useParams()
    const place = data[index]

    return (
        <div className='project'>
            <img alt="" src={place.image} width="600" height="400" />
            <h3>{place.title}</h3>
            <p>{place.desc}</p>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default SelectedProject