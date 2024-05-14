import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'

const ViewOrderDetails = () => {

  const params = useParams()
  const firebase=useFirebase()

  const [orders,setOrders]=useState([])

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders)=>setOrders(orders.docs))
  }, [])
  

  return (
    <div>
      <h1>Order Details</h1>
      {
        orders.map((order)=>{
          const data=order.data();
          return(
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