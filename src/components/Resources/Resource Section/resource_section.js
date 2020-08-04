import React from 'react'
import ResourceItem from '../Resouce Item/resource_items'

import './resource_section.css'

const resourceSection = (props) => {
    const renderedItems = props.contents.map(item => (
        <ResourceItem fileName="Course Syllabus"
            key={item.name}
            icon={item.icon}
            name={item.name}
            src={item.source}
        />
    ))

    return (
        <div className="Resource-section">
            <div className="Section-name">
                {props.sectionName}
            </div>
            <div className="Section-content">
                {renderedItems}
            </div>
        </div>

    )
}

export default resourceSection