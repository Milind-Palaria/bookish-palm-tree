import React, { useState, ChangeEvent } from 'react';
import { useFirebase } from '../context/Firebase';

const List: React.FC = () => {
  const firebase = useFirebase();
  const [name, setName] = useState<string>("");
  const [isbnNumber, setIsbnNumber] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [coverPic, setCoverPic] = useState<File | null>(null);

  const handleSubmit = () => {
    if (coverPic) {
      firebase?.handleNewListing(name, isbnNumber, parseFloat(price), coverPic);
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverPic(e.target.files[0]);
    }
  }

  return (
    <div className='ml-10 mt-10'>
      <h1 className="text-8xl">List</h1>
      <p>Book Name</p>
      <input
        type="text"
        placeholder='Enter book name'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <p>ISBN Number</p>
      <input
        type="text"
        placeholder='Enter ISBN Number'
        onChange={(e) => setIsbnNumber(e.target.value)}
        value={isbnNumber}
      />
      <br />
      <p>Enter Price</p>
      <input
        type="text"
        placeholder='Enter Price'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <br />
      <p>Upload Cover Pic</p>
      <input
        type="file"
        placeholder='Upload Here'
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>Submit Book</button>
    </div>
  );
}

export default List;
