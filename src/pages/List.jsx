import React from 'react'

const List = () => {
  return (
    <div>
    <p>email</p><input type="text" placeholder='enter email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
    <br />
    <p>password</p><input type="password" placeholder='enter password' onChange={(e) => { setPass(e.target.value) }} value={pass} />
    <br />
    <button onClick={createUser}>Login User</button>
</div>
  )
}

export default List