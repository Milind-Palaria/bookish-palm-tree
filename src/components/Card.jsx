import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from "react-router-dom"

import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from 'gsap/all'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const Card = (props) => {
    const firebase = useFirebase()
    const navigate = useNavigate()
    const [url, setURL] = useState(null)
    useEffect(() => {
        firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    }, [])


    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.fromTo(box, {
                scale: 0,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom",
                    end: "top 80%",
                    scrub: 1
                },
                ease: "power1.inOut"
            }
            )
        })
    }, [{ scope: scrollRef }]);


    return (
        <div className='p-10' ref={scrollRef}>
            <div className="swiper-slide">
                <img src={url} className='w-[30rem] h-[30rem]'/>
                <div className="overlay">
                    <h1>Walking Tour in Florence</h1>
                    <p>
                        Discover the fascinating beauty of this historic city by
                        strolling through the rich cultural tapestry that makes Florence
                        a timeless destination.
                    </p>

                </div>
            </div>
            {/* <div  className="flex flex-wrap gap-2 items-center justify-center p-10 bg-white text-black">
            <img src={url} className=' h-40 w-40'/>
            <div>

            <h1>Book Details</h1>
            <h2>{props.name}</h2>
            <h3>Title: {props.name}</h3>
            <h3>Sold By: {props.displayName}</h3>
            <h3>ISBN Number: {props.isbn}</h3>
            <p>Price: {props.price}</p>
            <button onClick={e=>navigate(props.link)}>Explore</button>
            </div>
        </div> */}

        </div>
    )
}

export default Card