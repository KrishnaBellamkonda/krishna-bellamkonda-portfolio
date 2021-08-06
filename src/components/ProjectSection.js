import React from 'react'

export default function ProjectSection(props) {
    
    // Alignment 

    const projectClassString = props.reverse?`project reverse`:`project`
    
    return (
        <div className={projectClassString}>
            <div className="project-text text-container">
                <a href={props.href}>
                    <h4 className="upper-case light-color semi-bold underline">{props.title}</h4>
                </a>
                <p className="light-color" style={{flexShrink:1}}>{props.desc}</p>
                <div className="project-tags">
                    {
                    props.tags.map((item, index)=> <span className="low-contrast-color upper-case">{item}</span>)
                    }           

                    
                </div>

                <div className="button-container" >
                {props.button?<a href={props.buttonHref} className="button">View Live</a>:null}

                </div>

            </div>

            <div className="project-visual">
                <a href={props.href}><img src={props.gif} alt={props.alt} /></a>
            </div>

        </div>
    )
}
