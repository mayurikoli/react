import { useState,Component,useEffect} from "react";
import { Link, useHistory ,useParams} from "react-router-dom";
import React from "react";

import axios from "axios";

export const EditUser = () => {
    const {id}=useParams();
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
    const {name, occupation, contactNumber,email,company,address} = user;
    const onInputChange = (e) => {
        //console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value});
        

    };
    useEffect(()=>{
        loadUser();
    },[]);
    const onSubmit = async(e) =>
    {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        
    
      history.push("/Team")



    };
    const loadUser=async()=>
    {
        const result =await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUser(result.data)
    }
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
            
            <button  className="btn btn-primary btn-block">EditUser</button>
            </form>
            </div>
    
            </div>
    )

    };