import React, { useState } from "react";
// import MainNavbar from "./MainNavbar";
import {db} from './firebase';

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formSubmit = (e) =>{
        e.preventDefault();

        db.collection("contacts").add({
            name: name,
            email:email,
            message:message
        })
        .then(() => {
            alert("Message has been submitted")
        })
        .catch((error)=>{
            alert(error.message);
        });

        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
    };
    return (
        <>
        <div className="container-fluid bg">
            <div className="my-5">
            <h2 className="text-center" >Contact Us</h2>
            
          <p className="para">Email us and us upto date</p>
          </div>
            <div className="container cotact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label >Full Name:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" 
                
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Full Name"/>
                    </div>
                    <div className="form-group">
                        <label >Phone Number:</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1"
                        
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label >Email address:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                       
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
    <label >Message:</label>
    <textarea className="form-control" id="exampleFormControlTextarea1"
    
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    rows="3"></textarea>
  </div>
  <div className="col-12">
  <button type="submit" className="btn btn-primary">Send</button>
  </div>
</form>
                    </div>
                    
                </div>
                </div> 
                </div>
        </>
    )
}

export default Contact;