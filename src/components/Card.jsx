import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'

const Card = (props) => {
    const firebase=useFirebase()
    const [url,setURL]=useState(null)
    useEffect(() => {
      firebase.getImageURL(props.imageURL).then((url)=>setURL(url));
    }, [])
    
    return (
        <div  className="flex flex-col gap-2 items-center justify-center outline-dashed p-10">
            <img src={url}/>
            <h1>Book Details</h1>
            <h2>{props.name}</h2>
            <h3>Title: {props.name}</h3>
            <h3>Sold By: {props.displayName}</h3>
            <p>Price: {props.price}</p>
            <button>Explore</button>
        </div>
    )
}

export default Card