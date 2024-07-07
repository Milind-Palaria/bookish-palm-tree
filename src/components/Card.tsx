import React, { useEffect, useState, useRef } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

interface CardProps {
  id: string;
  title: string;
  author: string;
  link: string;
  name?: string;
  imageURL?: string;
  displayName?: string;
  isbn?: string;
  price?: number;
}

const Card: React.FC<CardProps> = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [url, setURL] = useState<string | null>(null);

  useEffect(() => {
    if (firebase && props.imageURL) {
      firebase.getImageURL(props.imageURL).then((url: string) => setURL(url));
    }
  }, [firebase, props.imageURL]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (scrollRef.current) {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box: any) => {
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
            scrub: 1,
          },
          ease: "power1.inOut",
        });
      });
    }
  }, [{ scope: scrollRef }]);

  return (
    <div className='p-10' ref={scrollRef}>
      <div className="swiper-slide lobster-regular">
        <img src={url || ''} className='w-[30rem] h-[30rem]' alt="Book Cover"/>
        <div className="overlay">
          <h1>{props.name}</h1>
          <p>
            Discover the fascinating beauty of this historic city by
            strolling through the rich cultural tapestry that makes Florence
            a timeless destination.
          </p>
          <h3>Sold By: {props.displayName}</h3>
          <h3>ISBN Number: {props.isbn}</h3>
          <p>Price: {props.price}</p>
          <button onClick={() => navigate(props.link)}>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
export type { CardProps };
