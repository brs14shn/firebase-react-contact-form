import { useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import FormComponent from './components/form/FormComponent';

const initialValues={username:"",phoneNumber:"",gender:""};

function App() {
 const [info, setİnfo] = useState(initialValues)
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setİnfo}/>
      <Contacts/>
    </div>
  );
}

export default App;