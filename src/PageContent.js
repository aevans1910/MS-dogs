import data from './data'
import React from 'react'
import Project from './Project'

import './PageContent.css'

function PageContent() {
    return (
            <div className="project">
                {
                data.map((place, i) => {
                    return (
                        <Project
                            key={`${i}-${place.image}`}
                            title={place.title}
                            image={`${place.image}`}
                            link={`${i}`}
                            features={place.features}
                        />
                    )
                })
                }
            </div>       
    )
}

export default PageContent