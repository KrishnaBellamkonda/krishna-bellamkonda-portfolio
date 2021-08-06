import React from 'react'
import SideNav from '../components/SideNav'
import MainNav from '../components/MainNav'


import { useEffect, useRef } from 'react'

export default function LandingPage() {

    // Constants
    const skillsUpdateTime = 1200;
    const skills = ["Data Science", "A.I & M.L", "Front-End"]

    // State & refs
    let landingSkillCounter = useRef(0)
    const landingSkillRef = useRef();


    // Updating Skill Landing every second
    useEffect(()=>{
        const interval = setInterval(()=>{
            // console.log(skills[landingSkillCounter.current])
            if(landingSkillCounter.current === 2) landingSkillCounter.current = 0;
            else landingSkillCounter.current += 1
            landingSkillRef.current.textContent = skills[landingSkillCounter.current]
        }, skillsUpdateTime)


        return ()=> clearInterval(interval)


    }, [])


    return (
        <div className="perfect-page landing-page container page">
            <MainNav />
            <div className="landing-page-text">
                <h4 className="low-contrast-color semi-bold">Hello! I am </h4>
                <h1 className="accent-color">Krishna Bellamkonda.</h1>
                <h3 className="low-contrast-color">I build meaningful data-driven applications using </h3>
                <span id="landing-page-skill" ref={landingSkillRef} className="skills-span">
                    Data Science
                </span> 
            </div>

            <div className="flex-horizontal buttons">
                <a href="#projects-page" className="button">View Projects</a>
                <a href="#contact-me-page" className="button">Connect with me</a>
            </div>
            

        </div>
    )
}

