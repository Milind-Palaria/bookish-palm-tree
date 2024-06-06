import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"
import Card from "../components/Card";

const Home2 = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState("")
    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    }, [])


    return (
        <div>
            {/* <h1 className="text-8xl mb-10">main</h1> */}
            <div className="h-screen w-screen overflow-x-hidden bg-black text-white  lobster-regular flex justify-around underline">
                {/* <div className="flex flex-col w-1/2 items-center">
                <h1 className=" translate-y-5">Bookish</h1>
                <h1 className=" translate-y-5">Palm</h1>
                <h1 className=" translate-y-5 ">Tree .</h1>
                </div> */}
                <div className=" w-full h-full mt-4">

                    <h1 className="absolute mix-blend-normal text-nowrap left-0 right-0 text-center text-[8rem] translate-y-[-1rem]">Bookish</h1>
                    
                    <img src="book1.jpg" alt="book" className=" w-[80%] h-1/4 m-auto object-cover opacity-50"/>

                    <h1 className="absolute mix-blend-normal text-nowrap left-0 right-0 text-center text-[8rem] translate-y-6">Palm</h1>
                    
                    <img src="book2.jpg" alt="book"  className=" w-[80%] h-1/4  m-auto mt-10 object-cover opacity-50" />
                    
                    <h1 className="absolute mix-blend-normal left-0 right-0 text-center text-[8rem] translate-y-4">tree</h1>
                    
                    <img src="book3.jpg" alt="book"  className=" w-[80%] h-1/4  m-auto mt-10 object-cover opacity-50"/>

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

export default Home2