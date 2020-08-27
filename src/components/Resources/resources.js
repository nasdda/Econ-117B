import React from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'

import ResourceSection from './Resource Section/resource_section'

import sections from './sections'

import '../../App.css'
import './resources.css'


const resources = (props) => {
    const displaySections = sections.map(section => (
        <ResourceSection
            key={section.sectionName}
            sectionName={section.sectionName}
            contents={section.contents}
        />
    ))

    return (
        <React.Fragment>
            <Toolbar />
            <h1 className="Page-title">Resources</h1>
            {displaySections}
        </React.Fragment>
    )
}

export default resources