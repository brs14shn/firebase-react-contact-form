import { useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';
import {AddUser} from "./utils/function"

const initialValues={username:"",phoneNumber:"",gender:""};



function App() {
 const [info, setİnfo] = useState(initialValues)

 const handleSubmit=(e)=>{
  e.preventDefault()
  //* 
  // console.log(info)
  AddUser(info)


 }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setİnfo} handleSubmit={handleSubmit}/>
      <Contacts/>
    </div>
  );
}

export default App;
