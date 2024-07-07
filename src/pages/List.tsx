import React from 'react'
import { useState } from 'react'
import { useFirebase } from '../context/Firebase'


const List = () => {
  const firebase = useFirebase()
  const [name, setName] = useState("")
  const [isbnNumber, setIsbnNumber] = useState("")
  const [price, setPrice] = useState("")
  const [coverPic, setCoverPic] = useState("")

  const handleSubmit = () => {
    firebase.handleNewListing(name,isbnNumber,price,coverPic)
   }
  return (
    <div className=' ml-10 mt-10'>
      <h1 className=" text-8xl">List</h1>
      <p>book name</p><input type="text" placeholder='enter book name' onChange={(e) => { setName(e.target.value) }} value={name} />
      <br />
      <p>ISBN Number</p><input type="text" placeholder='enter ISBN Number' onChange={(e) => { setIsbnNumber(e.target.value) }} value={isbnNumber} />
      <br />
      <p>Enter Price</p><input type="text" placeholder='enter Price' onChange={(e) => { setPrice(e.target.value) }} value={price} />
      <br />
      <p>Upload Cover Pic</p><input type="file" placeholder='Upload Here' onChange={(e) => { setCoverPic(e.target.files[0]) }} />
      <button onClick={handleSubmit}>Submit Book</button>
    </div>
  )
}

export default List