import React, { useEffect, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { DocumentData } from 'firebase/firestore';

interface Params {
  bookId: string;
}

const BookDetails: React.FC = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [data, setData] = useState<DocumentData | null>(null);
  const [url, setURL] = useState<string | null>(null);
  const [qty, setQty] = useState<number>(1);

  useEffect(() => {
    if (params.bookId) {
      firebase?.getBookById(params.bookId).then((value) => {
        if (value) {
          setData(value.data());
        }
      });
    }
  }, [firebase, params.bookId]);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase?.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data, firebase]);

  const placeOrder = async () => {
    if (params.bookId) {
      const result = await firebase?.placeOrder(params.bookId, qty);
      console.log("Order Placed", result);
    }
  };

  if (data == null) return <h1>Loading...</h1>;

  const handleQtyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQty(Number(e.target.value));
  };

  return (
    <div>
      {url && <img src={url} className='h-80 w-160' alt="Book cover" />}
      <h1>{data.name}</h1>
      <p>Price: {data.price}</p>
      <p>ISBN: {data.isbn}</p>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
      <input type="number" placeholder='quantity' onChange={handleQtyChange} value={qty} />
      <button onClick={placeOrder}>Buy Now</button>
    </div>
  );
}

export default BookDetails;
