import React, { useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import TabSection from '../components/TabSection';
import SocialProofSection from './SocialProofSection';

// TAB CONSTANTS
const TABS = {
    "data_science":"Data Science",
    "ai_ml":"A.I & M.L",
    "front_end":"Front-End",
    "general":"General",
    
}


export default function SkillsPage() {

    const skillPageRef = useRef()


    return (
        <div ref={skillPageRef} className="perfect-page page skills-page container flex-between flex-align-center" id="skills-page"> 
            <SectionHeader 
            sectionHeading = 'I - SKILLS'
            sectionNumber =  '1'
            alignment = 'section-number-align-end' 
            headerAlignment = 'align-end'
            />

            <TabSection 
            skillPageRef = {skillPageRef}
            />
            
            <SocialProofSection />


        </div>
    )
}
