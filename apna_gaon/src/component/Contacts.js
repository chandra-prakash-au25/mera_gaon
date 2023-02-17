import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
var data= [
  {
    "id": 1,
    "name": "Elma Herring",
    "email": "elmaherring@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 2,
    "name": "Knapp Berry",
    "email": "knappberry@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 3,
    "name": "Bell Burgess",
    "email": "bellburgess@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 4,
    "name": "Hobbs Ferrell",
    "email": "hobbsferrell@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 5,
    "name": "Marylou Medina",
    "email": "maryloumedina@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 6,
    "name": "Larson Guerra",
    "email": "larsonguerra@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 7,
    "name": "Shelby Ballard",
    "email": "shelbyballard@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 8,
    "name": "Lea Faulkner",
    "email": "leafaulkner@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 9,
    "name": "Cecelia Wolf",
    "email": "ceceliawolf@unq.com",
    "phone": "+919810153260"
  },
  {
    "id": 10,
    "name": "Melva Nixon",
    "email": "melvanixon@unq.com",
    "phone": "+919810153260"
  }
]


const Contacts = () => {
  const navigate = useNavigate()
  const [contact,setContact]=useState(data)
  const HandleClick=(val)=>{
    console.log(val)
    localStorage.setItem("number",val)
    console.log(localStorage.getItem('number'))
     navigate('/compose')
  }
  console.log(contact)
  return (
    <div className='contacts'>
      <div className='container'>
        <h1>Contacts</h1>
      </div>
      <div className='contact'>
        <div className='con-item'>
          <span >Name</span>
          <span >Email</span>
          <span >Phone</span>
          <span ></span>
        </div>
      </div>
      {
        contact.map((num,i)=>{
          return(
            <div className='contact' key={i}>
            <div className='con-item'>
              <span >{num.name}</span>
              <span >{num.email}</span>
              <span >{num.phone}</span>
              <span ><button className='link2' onClick={()=>{HandleClick(num.phone)}}>SEND MESSAGE</button></span>
            </div>
          </div>
    
        
        )

        })
      }
    </div>
  )
}

export default Contacts