import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Card from '../components/Card';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CurrentBooks: React.FC = () => {
  const [books, setBooks] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const firebase = useFirebase();

  useEffect(() => {
    firebase?.listAllBooks().then((books) => setBooks(books.docs));
  }, [firebase]);

  return (
    <div>
      <div className="flex gap-20 items-center justify-center flex-wrap bg-black text-white">
        {
          books && books.map((book) => (
            <Card link={`/book/view/${book.id}`} key={book.id} id={book.id} {...book.data()} />
          ))
        }
      </div>
    </div>
  );
}

export default CurrentBooks;
