import React from 'react'
import Card from '../components/Card'
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"

import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import {ScrollTrigger} from 'gsap/all'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const CurrentBooks = () => {
  // const scrollRef=useRef();

  // useGSAP(()=>{
  //   const boxes=gsap.utils.toArray(scrollRef.current.children);

  //   boxes.forEach((box)=>{
  //       gsap.fromTo(box,{
  //         scale:0,
  //         opacity:0,
  //       },{
  //           scale:1,
  //           opacity:1,
  //           scrollTrigger:{
  //             trigger:box,
  //             start:"top bottom",
  //             end:"top 50%",
  //             scrub:1
  //           },
  //           ease:"power1.inOut"
  //         }
  //   )
  //     })
  //   },[{scope:scrollRef}]);

  const [books, setBooks] = useState("")
  const firebase = useFirebase();
    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    }, [])
  return (
    <div>
         <div className="flex gap-20 items-center justify-center flex-wrap bg-black text-white "  >
                {
                    books && books.map((book) => (
                        <Card link={`/book/view/${book.id}`} key={book.id} id={book.id} {...book.data()} />
                    ))
                }
            </div>
    </div>
  )
}

export default CurrentBooks