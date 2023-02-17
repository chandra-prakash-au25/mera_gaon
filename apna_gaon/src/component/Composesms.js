import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"




const Composesms = () => {
const [mess,setMess]=useState('')
const navigate = useNavigate()
const handleClick=()=>{
  const OTP=Math.floor(100000 + Math.random() * 900000)
  console.log(OTP)
  const whole_message=mess+"  Hi Your OTP is :"+OTP
  console.log(whole_message)
  
  const data={
    
      "name":"Test",
      "emai":"test@gmail.com",
      "phone":localStorage.getItem('number'),
      "message":whole_message
  
  }

  axios.post('http://localhost:4000/create_post',data
  ).then((response) => {
    console.log(response)
    navigate('/sended')
  }).catch((err)=>{
    alert("something went wrong")
    console.log(err)
  });
}
  return (
    <div className='contacts'>
      <h1>COMPOSE MESSAGE</h1>
      <div className='mess'>
        <div className='message' onChange={(e)=>setMess(e.target.value)}>
          <textarea/>
        </div>
        <div><button className='sent' onClick={handleClick}>SEND</button></div>
      </div>
    </div>
  )
}

export default Composesms