import React from 'react'
import Toolbar from '../Navigation/Toolbar/toolbar'

import ResourceSection from './Resource Section/resource_section'

// files
import CourseSyllabus from './PDFs/files/PDF-Course-Outline-Econ.-117B-Fall-2018.pdf'

// icons
import { ReactComponent as PdfIcon } from '../../assets/pdf.svg'
import { ReactComponent as VideoIcon } from '../../assets/play-button.svg'


import '../../App.css'
import './resources.css'



const resources = (props) => {

    let sections = [
        {
            sectionName: "Introduction",
            contents: [
                {
                    icon: <PdfIcon />,
                    name: "Course Syllabus",
                    source: CourseSyllabus
                },
                {
                    icon: <VideoIcon />,
                    name: "Good Song",
                    source: "https://www.youtube.com/embed/lFNWUL9fqG8?list=LLXVwRHW9UOTmw20RfXGzVTg"
                }
            ]
        }

    ]

    sections = sections.map(section => (
        <ResourceSection
            sectionName={section.sectionName}
            contents={section.contents}
        />
    ))

    return (
        <React.Fragment>
            <Toolbar />
            <h1 className="Page-title">Resources</h1>
            {sections}
        </React.Fragment>
    )
}

export default resources