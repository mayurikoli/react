import React,{useState,useEffect} from 'react';
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




const Team=()=> {
    const [users,setUser]=useState([]);
    useEffect(()=>{
       loadUser();
       console.log("miks");
    },[]);
    const loadUser=async()=>{
        const result =await axios.get('http://localhost:3003/users');
        console.log(result);
        setUser(result.data);
      }
      const deleteUser= async(id) =>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUser();
      }
      
  return (
    <div>
          <Link to="/add" className="btn btn-primary" style={{float: "right",margin:"20px" }}>Add User</Link>
          
    <div className="team" style={{margin:"20px"}}>
     <table className="table border shadow">
  <thead className="table-success">
    <tr>
    <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">Occupation</th>
      <th scope="col">ContactNumber</th>
      <th scope="col">Email</th>
      <th scope="col">Company</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
        <tr>
        
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.occupation}</td>
        <td>{user.contactNumber}</td>
        <td>{user.email}</td>
        <td>{user.company}</td>
        <td>{user.address}</td>
        <td>
        <Link to={`/show/${user.id}`} className="btn btn-primary mr-2">view</Link>
        <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2">Edit</Link>
        <Link to="#" className="btn btn-danger mr-2" onClick={()=>deleteUser(user.id)}>Delete</Link>
      </td>
        </tr>
       
      ))
    }
  </tbody>
</table>

    </div>
    </div>
  );
}

export default Team;