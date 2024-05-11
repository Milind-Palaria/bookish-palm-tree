import React from 'react'

const Card = (props) => {
    return (
        <div>
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