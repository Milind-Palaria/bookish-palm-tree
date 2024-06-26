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
            {/* <h1 className="text-8xl mb-10">main</h1> */}
            <div className="h-screen text-[7rem] text-white bg-black lobster-regular flex justify-around underline">
                <div className="flex flex-col w-1/2 items-center">
                <h1 className=" translate-y-5">Bookish</h1>
                <h1 className=" translate-y-5">Palm</h1>
                <h1 className=" translate-y-5 ">Tree .</h1>
                </div>
                <div className=" w-1/2">
                    <img src="book1.jpg" alt="book" className=" w-4/12 absolute top-16 right-72"/>
                    <img src="book2.jpg" alt="book"  className=" w-4/12 absolute top-48 right-8"/>
                    <img src="book3.jpg" alt="book"  className=" w-4/12 absolute top-80"/>

                </div>
            </div>
            <div className="flex gap-10 items-center justify-center">
                {
                    books && books.map((book) => (
                        <Card link={`/book/view/${book.id}`} key={book.id} id={book.id} {...book.data()} />
                    ))
                }
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home