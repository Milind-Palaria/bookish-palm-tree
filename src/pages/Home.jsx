import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"


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
                        <li>{book.data().name}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default Home