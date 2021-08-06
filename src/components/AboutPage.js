import React from 'react'
import SectionHeader from '../components/SectionHeader'
import profileImage from '../images/Passport_size.JPG'

export default function AboutPage() {
    return (
        <div className="perfect-page about-page container page" id="about-page">
            <SectionHeader 
            sectionHeading = 'III - About Me'
            sectionNumber =  '3'
            alignment = 'section-number-align-start' 
            headerAlignment = 'align-start'
            />

            <section className="about-layout">

                <div className="text">
                    <article className="low-contrast-color">
                    Hello again! I am a physics enthusiast from Hyderabad, India.
                    Recently, I completed my IBDP programme and am looking
                    forward to studying Physics research at the uniqersity level. It has
                    been a long passion of mine to build meaningful applications
                    albiet sometimes for fun. This yearning of mine helped me build this website and 
                    display my profile. I am currently looking
                    for internships to which I can contirbute while fostering my skills.
                    Thank you for your time! Have a great day!
                    </article>
                </div>

                <div className="visual">
                    <img src={profileImage} alt="Krishna Bellamkonda profile pic" className="profile-pic"/>
                </div>

            </section>
        </div>
    )
}
