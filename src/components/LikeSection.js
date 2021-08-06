import React, { useEffect, useState } from 'react'
import {ReactComponent as SVG} from '../images/interactions/heart.svg'

// Like system 
import firebase from 'firebase'
import {db} from '../firebase'

const increment = firebase.firestore.FieldValue.increment(1)
const decrement = firebase.firestore.FieldValue.increment(-1)
const counterDocRef = db.collection('counter').doc('test')


export default function LikeSection() {

    // state and ref
    const [nLikes, setNLikes] = useState("")
    const [likeState, setLikeState] = useState(false);
    const [counterState, setCounterState] = useState(0)

    // Get Likes data 
    async function getNLikes(){
        try {
            const snapshot = await counterDocRef.get()
            const data = snapshot.data()
            if(data.count) setNLikes((old)=>data.count);
            console.log(data)
        } catch (error) {
            alert(error)
        }
    
    }
    


    useEffect(() => {
        getNLikes()
        
    }, [])

    // Like handler 
    function clickHandler(){   
        setLikeState((old)=>!old)
        if(likeState) { 
            setCounterState((old)=>old-1) 
            counterDocRef.update({count:decrement})
        }
        else {
            setCounterState((old)=>old+1)
            counterDocRef.update({count:increment})
        }

    }


    return (
        <div className="like-component">
            <div class="like-interaction flex-horizontal">
                <h4 className="light-color">Like This Page</h4>
                <SVG
                alt="like button"
                id="like-button"
                onClick={clickHandler}
                className = {likeState ? "like": null}
                />
            </div>
            <div className="display-likes flex-horizontal">
                <h4 className="light-color">{nLikes + counterState}<span>
                <SVG 
                className="like like-button"
                /></span> have been thrown this way</h4>
                
            </div>
        </div>
    )
}
