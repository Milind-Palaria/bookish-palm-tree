import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';

const BookDetails = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null)

  useEffect(() => {
    firebase.getBookById(params.bookId).then(value => setData(value.data()))
  }, [])
  
  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url))
    }
    console.log(data)
  }, [])

  if (data == null) return <h1>Lodaing...</h1>

  return (
    <div>
      {/* <h1>{data}</h1> */}
      <img src={url} className='h-80 w-160' />

      <h1>{data.name}</h1>
      <p>Price : {data.price}</p>
      <p>ISBN : {data.isbn}</p>
      <p>Name: {data.displayName}</p>
      <p>Email : {data.userEmail}</p>
      <button>Buy Now</button>


    </div>
  )
}

export default BookDetails