import React, { useEffect, useState } from 'react';
import Card, { CardProps } from './Card';
import { useFirebase } from '../context/Firebase';
import { DocumentData, QuerySnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
import ThreeDCardDemo, { ThreeDProps } from './3dCardUse';

const BestSellers: React.FC = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

  useEffect(() => {
    firebase?.listAllBooks().then((querySnapshot: QuerySnapshot<DocumentData>) => {
      setBooks(querySnapshot.docs); // Setting state with docs array
    });
  }, [firebase]);

  return (
    <div>
      <div className="flex gap-20 items-center justify-center flex-wrap bg-black text-white">
        {books.map((book) => (
          <ThreeDCardDemo
            key={book.id}
            {...book.data() as ThreeDProps}
            link={`/book/view/${book.id}`}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;

// <Card
//   key={book.id}
//   {...book.data() as CardProps}
//   link={`/book/view/${book.id}`}
//   id={book.id}
// />