import React, { useEffect } from 'react'
import SocialProofsArray from '../utility/SocialProofs'
import  { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// TO-DO => 1) Build a collage for social proofs

export default function SocialProofSection() {

    // Get array of text and organizations 
    const texts = SocialProofsArray.map(item=>item["text"])
    const organizations = SocialProofsArray.map(item=>item["organization"])
    const length = organizations.length



    return (
        
            <CarouselProvider className=""
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={length}
            interval = {2000}
            isPlaying={true}
            >
            
                <Slider className="section-heading-space">{

                    texts.map((item, index)=>{
                        return (
                            <Slide>
                                
                                <article className="social-proof grid grid-center">
                                    <p className="light-color text-center text-small">{item}</p>
                                    <h5 className="accent-color text-center" >{organizations[index]}</h5>
                                </article>
                            </Slide> 
                        )
                    })

                    }
                </Slider>
            </CarouselProvider>

    )
}
