import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import {useNavigate} from "react-router-dom"

const Card = (props) => {
    const firebase=useFirebase()
    const navigate= useNavigate()
    const [url,setURL]=useState(null)
    useEffect(() => {
      firebase.getImageURL(props.imageURL).then((url)=>setURL(url));
    }, [])
    
    return (
        <div  className="flex flex-col flex-wrap gap-2 items-center justify-center outline-dashed p-10">
            <img src={url} className=' h-40 w-40'/>
            <h1>Book Details</h1>
            <h2>{props.name}</h2>
            <h3>Title: {props.name}</h3>
            <h3>Sold By: {props.displayName}</h3>
            <h3>ISBN Number: {props.isbn}</h3>
            <p>Price: {props.price}</p>
            <button onClick={e=>navigate(`/book/view/${props.id}`)}>Explore</button>
        </div>
    )
}

export default Card