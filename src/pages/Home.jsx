import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"
import Card from "../components/Card";


const Home = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState("")
    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    }, [])


    return (
        <div className='ml-10 mt-10'>
            <h1 className="text-8xl mb-10">main</h1>
            <div className="flex gap-10 items-center justify-center">
                {
                    books && books.map((book) => (
                        <Card key={book.id} {...book.data()} />
                    ))
                }
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home