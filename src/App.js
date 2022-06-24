import './App.css';
import Navbar from "./Components/navbar.js"
import { Todos } from "./Components/todos.js";



function App() {
  
  return (
    <>
      <Navbar title="Contact Manager" home="Home" about="About" />
      <div className='container'>
      
        <Todos />
      </div>
    </>
  );
}

export default App;
