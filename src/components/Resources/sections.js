import React from 'react'

//icons
import { ReactComponent as PdfIcon } from '../../assets/pdf.svg'
import { ReactComponent as VideoIcon } from '../../assets/play-button.svg'

// files
import CourseSyllabus from './PDFs/files/PDF-Course-Outline-Econ.-117B-Fall-2018.pdf'

export default[
    {
        sectionName: "Introduction",
        contents: [
            {
                name: "Course Outline",
                icon: <PdfIcon />,
                source: CourseSyllabus,
                downloadable: true
            }
        ]
    }
]