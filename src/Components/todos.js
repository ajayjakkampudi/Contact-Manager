import { ListOfContacts } from "./list-of-contacts.js";
import React,{ useState } from 'react';
import Form  from "./form.js";


export const Todos = ({ info }) => {
  const onDelete= (list)=>{
    console.log("I am Deleted",list)
    setcontacts(contacts.filter((e)=>{
      return e!=list;
    }))
  }
  const [contacts,setcontacts]=useState([
    {
      S:1,
      Name: "Ajay",
      Number:3
    },
    {
      S:2,
      Name: "Ajay",
      Number:2
    },
    {
      S:3,
      Name: "jay",
      Number:90
    }
  ])
  const addcontacts=(Name,Number)=>{
    console.log("Added contact")
    let S=contacts[contacts.length-1].S+1
    const mycontacts={
      S:S,
      Name: Name,
      Number: Number
    }
    setcontacts([...contacts,mycontacts])
  }

  
  return (
    
    <div className='container'>
      <h1>Contacts</h1>
        <Form addcontacts={addcontacts} />
      
      { contacts.length===0? "No Contacts to display" :
        contacts.map((contact)=>{
          return <ListOfContacts list={ contact } key={ contact.S } ondelete={ onDelete } />

        }

        )
      }
      
      </div>
    
    
    
  )
}
