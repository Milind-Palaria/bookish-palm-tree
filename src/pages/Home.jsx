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
        <div>
            <h1 className=" text-8xl">main</h1>
            <div>
                {
                    books && books.map((book) => (
                        <Card {...book.data()}/>
                    ))
                }
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home