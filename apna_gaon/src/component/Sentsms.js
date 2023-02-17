import { useState,useEffect } from 'react'
import axios from 'axios';
import './nav.css'
const Sentsms = () => {
  const [data,setData]=useState()
  useEffect(() => {
    axios.get('http://localhost:4000/messages'
    ).then((response) => {
    console.log(response.data)
    setData(response.data.reverse())
    console.log(data)

    }).catch((err)=>{
      console.log(err)
      alert("something went wrong")
    });
  },[]);


  return (
    <div className='contacts'>
      <h1>SENDED SMS</h1>
      {data&&
      data.map((mess,i)=>{
        return(<div className='sent-t' style={{display:"flex",justifyContent:"space-around"}} key={i}>
          <span>{mess.Message}</span>
          <span>{mess.phone}</span>
          <span className='span' >{mess.createdAt}</span>
        </div>)
      })
      }

    </div>
  )
}

export default Sentsms