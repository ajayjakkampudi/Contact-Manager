import React,{ useState } from 'react';

export default function Form({addcontacts}) {
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const Submit=(e)=>{
      e.preventDefault();
      if(!name || !number){
        alert("Name nad Number shouldn't be left blank")
      }
      addcontacts(name,number);
    }
  return (
    
    <div>
        <form onSubmit={Submit}>
  <div className="form-group">
    <label htmlFor="title">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
  </div>
  <div className="form-group">
    <label htmlFor="title">Phone Number</label>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
