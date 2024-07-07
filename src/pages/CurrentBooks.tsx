import React, { useEffect, useState, useRef } from 'react';
import { useFirebase } from '../context/Firebase';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Card, { CardProps } from '../components/Card';
import { QuerySnapshot, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const CurrentBooks: React.FC = () => {
  const [books, setBooks] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const firebase = useFirebase();

  useEffect(() => {
    firebase?.listAllBooks().then((querySnapshot: QuerySnapshot<DocumentData>) => {
      setBooks(querySnapshot.docs); // Setting state with docs array
    });
  }, [firebase]);

  return (
    <div>
      <div className="flex gap-20 items-center justify-center flex-wrap bg-black text-white">
        {books.map((book) => (
          <Card
            key={book.id}
            {...book.data() as CardProps}
            link={`/book/view/${book.id}`}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrentBooks;
