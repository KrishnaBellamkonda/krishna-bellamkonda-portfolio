import React from 'react'

export default function SectionHeader(props) {
    
    // Align 
    const classString = `dancing-script section-number ${props.alignment}`
    const headerAlignmentClassString =  `flex-vertical ${props.headerAlignment}`

    return (

        <>
            <header className={headerAlignmentClassString}>
                <h3 className="accent-color upper-case page-heading-space">{props.sectionHeading}</h3>
            </header>
        
            <h2 className={classString}>{props.sectionNumber}</h2>

        </>

    )
}
