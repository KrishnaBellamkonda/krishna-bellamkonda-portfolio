import React, {useRef,useState} from 'react'
import {db} from '../firebase'

// Components
import SectionHeader from '../components/SectionHeader'
import LikeSection from '../components/LikeSection'

// Links
import githubLogo from '../images/interactions/github.svg'
import linkedinLogo from '../images/interactions/linkedin.svg'
import gmailLogo from '../images/interactions/gmail.svg'

// Like counter 


export default function ContactPage() {

    // State 
    const form = useRef()
    const [nameState, setNameState] = useState("")
    const [emailState, setEmailState] = useState("")
    const [messageState, setMesssageState] = useState("")

    const [loader, setLoader] = useState(false);
    // Form submit handler 
    function clearForm(){
        setNameState((old)=>"")
        setEmailState((old)=>"")
        setMesssageState((old)=>"")
    }


    function submitHandler(e){
        e.preventDefault()
        if(!(nameState && emailState && messageState)) alert("Enter all the fields")
        else {
            console.log("Running submission")

            const dataObject = {
                "name":nameState,
                "email":emailState, 
                "message":messageState
            }
            db.collection("messages").add(dataObject)
            .then(()=>{
                alert("Your message has been sent! Thank you!");
                setLoader((old)=>true)
            })
            .catch((err)=>{
                alert(err.message)
            })
            console.log(dataObject)
            clearForm()
        }

    
    }


    return (
        <div className="perfect-page contact-me page container" id="contact-me-page">
            <SectionHeader 
            sectionHeading = 'IV - Contact Me'
            sectionNumber = '4' 
            alignment = 'section-number-align-end' 
            headerAlignment = 'align-end'
            />

            <form action="" ref={form} className="form" id="contact-form" onSubmit={submitHandler}>
                <div className="fieldset-item">
                    <label htmlFor="contact-name"  className="light-color">Name</label>
                    <input type="text" name="name" className="contact-container" id="contact-name" autoComplete="off" onChange={(e)=>setNameState((old)=>e.target.value)} value={nameState}/>
                </div>

                <div className="fieldset-item">
                    <label htmlFor="contact-name"  className="light-color">Email</label>
                    <input type="text" name="email" id="contact-email" autoComplete="off" onChange={(e)=>setEmailState((old)=>e.target.value)} value={emailState}/>
                </div>

                <div className="fieldset-item">
                    <label htmlFor="contact-name" className="light-color">Message</label>
                    <textarea name="message" id="contact-message" autoComplete="off" rows="20" onChange={(e)=>setMesssageState((old)=>e.target.value)} value={messageState}></textarea>     
                </div>

                <div className="submit-container">
                    <button type="submit" id="submit-button">Send Message</button>
                </div>
            </form>

            <LikeSection id="like-button"/>

            <div className="contact-links">

                <div class="contact-me-links">
                    <a href="https://github.com/KrishnaBellamkonda"><img src={githubLogo} className="contact-link"/></a>
                    <a href="https://www.linkedin.com/in/krishna-bellamkonda-a6a422208/"><img src={linkedinLogo} className="contact-link"/></a>
                    <a href="mailto:chaitanya.bellamkonda247@gmail.com"><img src={gmailLogo} className="contact-link"/></a>
                </div>

            </div>


        </div>
    )
}
