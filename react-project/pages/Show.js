import { useState,useEffect } from "react";
import { Link, useHistory ,useParams} from "react-router-dom";
import React from "react";

import axios from "axios";
export const Show=()=>{
    const[user,setUser]=useState({
        id:"",
        name:"", 
        occupation:"", 
        contactNumber:"", 
        email:"", 
        company:"", 
        address:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>
    {
        const result =await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUser(result.data)
    }
    return(
        <div className="container py-4">
      <Link className="btn btn-primary" to="/team">
        back to Team
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">id: {user.id}</li>
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">occupation: {user.occupation}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">contactNumber: {user.contactNumber}</li>
        <li className="list-group-item">company: {user.company}</li>
        <li className="list-group-item">address: {user.address}</li>
      </ul>
      </div>
    )
}