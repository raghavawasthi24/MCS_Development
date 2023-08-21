
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

interface initialValues {
  name:string,
  password:string,
  email:string
}

function App() {
  const initialValues={
    name:"",
    password:"",
    email:""
  }

  const [formValues,setFormValues]=useState(initialValues);

  const inputfields=[{
    name:"name",
    value:formValues.name,
  },{
    name:"email",
    value:formValues.email,
  },{
      name:"password",
      value:formValues.password
  }]


  const inputHandler=(e)=>{
     const {name,value}=e.target;
     setFormValues({...formValues,[name]:value})
     console.log(formValues)
  }


  const submit=(e)=>{
  
      if(formValues.password.length<8)
      {
        alert("password must be of lenght 8");
        return;
      }

    e.preventDefault();
     console.log(formValues)
  }
  return (
    <div className="App ">
     <form onSubmit={submit}>
       { inputfields?.map((item,key) =>{
        return(
          <InputField name={item.name} value={item.value} change={inputHandler}/>
        )
       
        })
           }
       
         <button type='submit'>Submit</button>
         <p>{formValues.name}</p>
     </form>
    </div>
  );
}

export default App;
