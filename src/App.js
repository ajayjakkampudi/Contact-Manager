import './App.css';
import Navbar from "./Components/navbar.js"
import { Todos } from "./Components/todos.js";


function App() {
  let contacts=[
    {
      S:1,
      Name: "Ajay",
      number:1
    },
    {
      S:2,
      Name: "Ajay",
      number:2
    },
    {
      S:3,
      Name: "jay",
      number:89
    }
  ]
  return (
    <>
      <Navbar title="Contact Manager" home="Home" about="About" />
      <Todos />
    </>
  );
}

export default App;
