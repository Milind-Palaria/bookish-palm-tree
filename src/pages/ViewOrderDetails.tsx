import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore"; // Import necessary types
import { useFirebase } from '../context/Firebase';

interface Params {
  bookId: string;
}

const ViewOrderDetails: React.FC = () => {
  const params = useParams();
  const firebase = useFirebase();

  const [orders, setOrders] = useState<QueryDocumentSnapshot<DocumentData>[]>([]); // Add type annotation

  useEffect(() => {
    if (firebase && params.bookId) {
      firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
    }
  }, [firebase, params.bookId]);

  return (
    <div>
      <h1>Order Details</h1>
      {
        orders.map((order) => {
          const data = order.data();
          return (
            <div key={order.id}>
              <h1>Order by: {data.displayName}</h1>
              <h1>Qty: {data.qty}</h1>
              <h1>Email: {data.userEmail}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewOrderDetails
