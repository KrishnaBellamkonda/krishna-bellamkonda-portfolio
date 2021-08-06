import React from 'react'

export default function SideNav() {
    return (
        <aside id="sidenav-open" className="">
             


            <nav className="nav-links lower-contrast-bg-color sidenav-container">
                    <h3 className="accent-color lower-contrast-color">Pages</h3>
                    <a href="#skills-page" className="upper-case light-color navbar-links">Skills</a>
                    <a href="#projects-page" className="upper-case light-color navbar-links">Projects</a>
                    <a href="#about-page" className="upper-case light-color navbar-links">About Me</a>
                    <a href="#contact-me-page" className="upper-case light-color navbar-links">Contact</a>
                    <a href="#like-button" className="upper-case light-color navbar-links">Like Page</a>
            </nav>
            
            <a href="#" id="sidenav-close"></a>

        </aside>
    )
}



