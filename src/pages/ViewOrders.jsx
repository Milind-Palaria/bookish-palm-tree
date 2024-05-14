import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import Card from '../components/Card'

const ViewOrders = () => {

    const firebase= useFirebase()
    const [books,setBooks]= useState([])

    useEffect(() => {
      firebase.fetchMyBooks().then((books)=>setBooks(books))
    
    }, [firebase])
    

  return (
    <div>
        {
            books.map(book=>

                <Card key={book.id} id={book.id} {...book.data()}/>
            )
        }
    </div>
  )
}

export default ViewOrders