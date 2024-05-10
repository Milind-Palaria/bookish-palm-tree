import React from 'react'
import { useState } from 'react'

const List = () => {
const [name,setName]=useState("")
const [isbnNumber,setIsbnNumber]=useState("")
const [price,setPrice]=useState("")
const [coverPic,setCoverPic]=useState("")

const handleSubmit = ()=>{}

  return (
    <div>
    <p>book name</p><input type="text" placeholder='enter book name' onChange={(e) => { setName(e.target.value) }} value={name} />
    <br />
    <p>ISBN Number</p><input type="text" placeholder='enter ISBN Number' onChange={(e) => { setIsbnNumber(e.target.value) }} value={isbnNumber} />
    <br />
    <button onClick={handleSubmit}>Submit Book</button>
</div>
  )
}

export default List