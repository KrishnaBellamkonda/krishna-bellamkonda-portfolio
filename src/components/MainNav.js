import React from 'react'

export default function MainNav() {
    return (
        <header className="flex-horizontal-mobile" id="mainnav">
            <a href="#sidenav-open" id="sidenav-button">
                <svg aria-label="menu" className="hamburger" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
            </a>

            <nav className="flex-horizontal-between">
                <div id="logo">
                    <h4 className="dancing-script accent-color">KB</h4>
                </div>
                <nav className="mainnav-display flex-horizontal-around">
                    <a href="#skills-page" className="upper-case light-color navbar-links">Skills</a>
                    <a href="#projects-page" className="upper-case light-color navbar-links">Projects</a>
                    <a href="#contact-me-page" className="upper-case light-color navbar-links">Contact</a>
                    <a href="#about-page" className="upper-case light-color navbar-links">About Me</a>
                    <a href="#like-button" className="upper-case light-color navbar-links">Like Page</a>
                </nav>
            </nav>
        </header>
    )
}
