import React from 'react'

const Form = () => {
  function onsubmit(e){
    e.preventDefault();
    console.log("submit");
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    console.log("Email", email);
    console.log("password", password);

  }
  return (
    <>
      <div className="conainer m-4">
        <form onSubmit={onsubmit}>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form
