import React from 'react'

const BestSellers = () => {
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