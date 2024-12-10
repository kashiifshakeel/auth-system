import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {

  let [registerUser, setRegisterUser] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: "",
  })

  let navigate = useNavigate()

  let registerHandler = (e) => {
    let {name, value} = e.target
    setRegisterUser({...registerUser, [name]: value})
  }

  let registerSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/users", registerUser)
    .then(() => {
      toast.success("Registered Successfully!")
      setRegisterUser({
        userName: "",
        userEmail: "",
        userPassword: "",
        userPhoneNumber: "",
      })
      navigate("/login")
    })
    .catch(() => {
      toast.error("Something Went Wrong!")
    })
  }

  return (
    <div>
      <h1>Signup</h1>
      <br />
      <form>
        <div>
          <label>Name: </label>
          <input type='text' placeholder='Enter Name' required name='userName' value={registerUser.userName} onChange={registerHandler}/>
          <br />
          <br />
        </div>
        <div>
          <label>Email: </label>
          <input type='email' placeholder='Enter Email' required name='userEmail' value={registerUser.userEmail} onChange={registerHandler}/>
          <br />
          <br />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type='tel' placeholder='Enter Phone Number' required name='userPhoneNumber' value={registerUser.userPhoneNumber} onChange={registerHandler}/>
          <br />
          <br />
        </div>
        <div>
          <label>Password: </label>
          <input placeholder='Enter Password' required name='userPassword' value={registerUser.userPassword} onChange={registerHandler}/>
          <br />
          <br />
        </div>
        <div>
          <button onClick={registerSubmit}>SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Signup