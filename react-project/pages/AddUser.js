import { useState,Component} from "react";
import { Link, useHistory } from "react-router-dom";
import React from "react";

import axios from "axios";
import { render } from "@testing-library/react";
export const AddUser = () => {
    let history=useHistory();
    const[user,setUser]=useState({
        id:"",
        name:"", 
        occupation:"", 
        contactNumber:"", 
        email:"", 
        company:"", 
        address:""
    });
    const { id,name, occupation, contactNumber,email,company,address} = user;
    const onInputChange = (e) => {
        //console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value});
        

    };
    const onSubmit = async(e) =>
    {
        e.preventDefault();
        await axios.post('http://localhost:3003/users',user);
        
    
      history.push("/Team")



    };
    return(
        
            <div className="add">
                <div className="shadow-lg" style={{margin:"30px",alignContent:"center",padding:"30px"}}>
            <form onSubmit={e=>onSubmit(e)}>
           
            <div className="mb-3">
               
               <input type="text" className="form-control" placeholder="Enter the Id" name="id" value={id}  onChange={e=>onInputChange(e)}/>
           </div>
            <div className="mb-3">
               
                <input type="text" className="form-control" placeholder="Enter the Name" name="name" value={name}  onChange={e=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                
                <input type="text" className="form-control" placeholder="Enter the Occupation" name="occupation" value={occupation}  onChange={e=>onInputChange(e)} />
            </div>
            <div className="mb-3">
                
                <input type="tel" className="form-control" placeholder="Enter the ContactNumber" name="contactNumber" value={contactNumber}  onChange={e=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
               
                <input type="email" className="form-control" placeholder="Enter the Email" name="email" value={email}  onChange={e=>onInputChange(e)} />
            </div>
            <div className="mb-3">
               
                <input type="text" className="form-control" placeholder="Enter the Company Name" name="company" value={company}  onChange={e=>onInputChange(e)} />
            </div>
            <div className="mb-3">
                
                <input type="text" className="form-control" placeholder="Enter the Address "  name="address" value={address}  onChange={e=>onInputChange(e)}/>
            </div>
            
            <button  className="btn btn-primary btn-block">AddUser</button>
            </form>
            </div>
    
            </div>
    )

    };