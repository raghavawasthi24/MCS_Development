"use client";
import React,{useState} from 'react'

interface dam {
    name:string,
    price:number
}

const Company:React.FC = () => {
    const initialValues={
        name:"",
        price:"",
    }
   const [formvalues,setFormvalues]=useState(initialValues);

  const handleChange =(e)=>{
     console.log("hoo")
  }

  return (
    <div>
        hj
        <input onChange={handleChange} type='text' value={formvalues.name}/>
        <input type="text" />
    </div>
  )
}

export default Company