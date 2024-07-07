import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import Card, { CardProps } from '../components/Card'

interface Book {
    id: string;
    data: () => {
        [key: string]: any; // Define the shape of the book data if known
    };
}

const ViewOrders: React.FC = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        if (firebase?.isLoggedIn && firebase.user) {
            firebase.fetchMyBooks(firebase.user.uid)?.then((books) => setBooks(books.docs));
        }
    }, [firebase]);

    console.log(books);

    if (!firebase?.isLoggedIn) return <h1>Please Log In</h1>;

    // if (!firebase.isLoggedIn) return <h1>Please Log In</h1>;

    return (
        <div>
            {/* {books.map((book) => (
                <Card link={`/book/orders/${book.id}`} key={book.id} id={book.id} {...book.data()} />
            ))} */}
             {books.map((book) => (
          <Card
            key={book.id}
            {...book.data() as CardProps}
            link={`/book/view/${book.id}`}
            id={book.id}
          />
        ))}
        </div>
    );
}

export default ViewOrders;
