import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"

const Inicio = () => {
const [users, setUsers] = useState([]);
useEffect(() => {
  getUsers();
}, []);

  const getUsers = async () => {
    try {
      const request = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(request.data);
    } catch (e) {
      console.log("error" + e)
    }
  };
  return (
    <>
    <h3 className='text-center'>Proveedores</h3>
        <div className='container'>
    
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Calle</th>
          <th>Apto</th>
          <th>Mapa</th>
          <th>Celular</th>
          <th>Sitio Web</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td>{element.address.street}</td>
              <td>{element.address.suite}</td>
              <td><button className='btn btn-danger'>Mapa</button></td>
              <td>{element.phone}</td>
              <td>{element.website}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Inicio