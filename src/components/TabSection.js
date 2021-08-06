import React, { useState, useRef, useEffect } from 'react'
import LOGOS from '../utility/images'
import CLASSIFIED_LOGOS from '../utility/skillClassifiedLogos'
import useOnScreen from '../utility/useIntersection'

// TO-DO -> Tabs Section
// 1) Set the active element when a section is scrolled into view

// TAB CONSTANTS
const TABS = {

    0:"Data Science",
    1:"A.I & M.L", 
    2:"Front-End", 
    3:"General"


}

// Logo Icons


// Utility 
function nameToHref(name){
    const addViz = name + " viz"
    const stripped = addViz.replace(" ", "-")
    const lower = stripped.toLowerCase()
    return `#${lower}`
}

function nameToID(name){
    const addViz = name + " viz"
    const stripped = addViz.replace(" ", "-")
    const lower = stripped.toLowerCase()
    return lower
}

function getMargin(width, percentage=10){
    


    if(width <= 350){
        let frac= (percentage-8.5)/100;
        console.log(frac*width)
        return (18)
    }

    if(width <= 380) {
        let frac= (percentage-8)/100;
        console.log(frac*width)
        return (20)
    }


    if(width <= 400){
        let frac= (percentage-7)/100;
        console.log(frac*width)
        return (frac*width)
    }

    if(width <= 700){
        let frac= (percentage-6)/100;
        console.log(frac*width)
        return (frac*width)
    }

    if(width <= 810 ) {
        let frac= (percentage-4)/100;
        console.log(frac*width)
        return (frac*width)
    } 
    
    if(width <= 1150) {
        let frac= (percentage-2)/100;
        console.log(frac*width)
        return (frac*width)
    } if(width <= 1200){
        let frac= (percentage)/100;
        console.log(frac*width)
        return (frac*width)
    } if(width <= 1350) {
        let frac= (percentage+2)/100;
        console.log(frac*width)
        return (frac*width+(width-1200))
    }

    if(width <= 1700) {
        let frac= (percentage+7)/100;
        console.log(frac*width)
        return (frac*width + (width-1200))
    }

    if(width <= 1950) {
        let frac= (percentage+9)/100;
        console.log(frac*width)
        return (frac*width + (width-1200))
    }


    else {
        let frac = (percentage + 11)/100
        console.log(frac*(width) + (width-1200))
        return (frac*(width) + (width-1200))
    }
}

export default function TabSection(props) {

    // Constants 
    const tabState = useRef(0);
    const tabsRef = useRef()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)




    useEffect(() => {
        const resizeEventListener = window.addEventListener('resize', ()=>{
            setWindowWidth((old)=>window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', resizeEventListener)
        }
    }, [])


    

    // Tabs Ref
    const dataScienceRef = useRef()
    const aiAndMLRef = useRef()
    const frontEndRef = useRef()
    const generalRef = useRef()
    const refs = [dataScienceRef, aiAndMLRef, frontEndRef, generalRef]

    // Buttons ref 
    const dataScienceButton = useRef()
    const aiAndMLBUtton = useRef()
    const frontEndButton = useRef()
    const generalButton = useRef()
    const tabButtonsRefs = [dataScienceButton, aiAndMLBUtton, frontEndButton, generalButton]

    // Is Visible 
    const dataScienceInView = useOnScreen(dataScienceRef, `-${getMargin(windowWidth)}px`)
    const aiAndMLInView = useOnScreen(aiAndMLRef, `-${getMargin(windowWidth)}px`)
    const frontEndInView = useOnScreen(frontEndRef, `-${getMargin(windowWidth)}px`)
    const generalInView = useOnScreen(generalRef, `-${getMargin(windowWidth)}px`)

    // console.log("********************")
    // console.log("DataScience", dataScienceInView)
    // console.log("AI", aiAndMLInView)
    // console.log("Frontend", frontEndInView)
    // console.log("geenral", generalInView)
    // console.log("********************")


    if(generalInView) tabState.current = 3
    if(frontEndInView) tabState.current = 2
    if(aiAndMLInView) tabState.current = 1
    if(dataScienceInView) tabState.current = 0


    // Handlers 
    function tabStateHandler(e){
        // console.log(e.target.value)
        tabState.current = parseInt(e.target.value)
    }

    // Make classes automatically 
    let classNames = Object.keys(TABS).map((item)=>{
        if (parseInt(item) == tabState.current) return `tab tab-active`
        else return `tab tab-inactive`
    })



    return (
        <div className="tabs-section" ref={tabsRef}>
            <nav className="grid-ram" >

                {
                    Object.values(TABS).map((name, index)=>{
                        return (
                            <div className={classNames[index]}>
                                <div className="circle"></div>
                                <a href={nameToHref(name)}  ref={tabButtonsRefs[index]} value={index} onClick={tabStateHandler}><button className="upper-case" value={index}  >{name}</button></a>
                            </div>
                        )
                    })
                }

            </nav>
            
            <div className="logo-holders snap-tabs-section scroll-snap-x" >{
                CLASSIFIED_LOGOS.map((sectionArray, index)=>{
                    return (

                        <section id={nameToID(Object.values(TABS)[index])} ref={refs[index]} className="logo-holder grid-ram grid-gap-medium">
                        {
                            sectionArray.map((name)=>{
                                let logo = LOGOS[name]
                                return (
                                    <img src={logo} className="logo-icon"/>
                                )
                            })
                        }
                    </section>

                    )
                })



            }</div>
            

        
        </div>
    )
}
