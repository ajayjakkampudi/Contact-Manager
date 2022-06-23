import React from 'react'

export const ListOfContacts = ({list,ondelete}) => {
  return (
    
    
    <div>
        <h2>{ list.Name }</h2>
        <p>{ list.Number }</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{ondelete(list)}}>Delete</button>



    </div>
    
  )
}
