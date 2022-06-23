import './App.css';
import Navbar from "./Components/navbar.js"
import { Todos } from "./Components/todos.js";
import Form from './Components/form.js'


function App() {
  
  return (
    <>
      <Navbar title="Contact Manager" home="Home" about="About" />
      <div className='container'>
        <h1>Contacts</h1>
        <Form name="Name" number="Number" />
        <Todos />
      </div>
    </>
  );
}

export default App;
