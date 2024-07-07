import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useFirebase } from '../context/Firebase';

const BestSellers = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState("")
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

export default BestSellers