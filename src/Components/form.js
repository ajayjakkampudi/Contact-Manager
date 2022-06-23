import React from 'react'

export default function Form({name,number}) {
  return (
    <div>
        <form>
  <div className="form-group">
    <label for="title">{name}</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
  </div>
  <div className="form-group">
    <label for="title">{number}</label>
    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
