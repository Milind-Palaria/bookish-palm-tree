import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import Card from '../components/Card';

// Define the interface for the book data
interface Book {
  id: string;
  data: () => {
    title: string;
    author: string;
    [key: string]: any; // Add more fields as needed
  };
}

const ViewOrders: React.FC = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (firebase?.isLoggedIn) {
      firebase?.fetchMyBooks(firebase?.user.uid)?.then((books) => setBooks(books.docs as Book[]));
    }
  }, [firebase]);

  console.log(books);

  if (!firebase?.isLoggedIn) return <h1>Please Log In</h1>;

  return (
    <div>
      {books.map((book) => (
        <Card
          link={`/book/orders/${book.id}`}
          key={book.id}
          id={book.id}
          {...book.data()}
        />
      ))}
    </div>
  );
};

export default ViewOrders;
