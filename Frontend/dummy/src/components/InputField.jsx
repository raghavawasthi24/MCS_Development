import React from 'react'

const InputField = ({value,name,change}) => {
  return (
   <div >
    <label>{props.name}</label>
    <input value={value} name={name} onChange={change}/>
  </div>
  
  )
}

export default InputField