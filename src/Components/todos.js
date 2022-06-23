import { ListOfContacts } from "./list-of-contacts.js";
import React,{ useState } from 'react';


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
  
  return (
    
    <div className='container'>
      
      { contacts.length===0? "No Contacts to display" :
        contacts.map((contact)=>{
          return <ListOfContacts list={ contact } key={ contact.S } ondelete={ onDelete } />

        }

        )
      }
      
      </div>
    
    
    
  )
}
