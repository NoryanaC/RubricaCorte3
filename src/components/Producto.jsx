import React from 'react'
import axios from "../service/Api"

const Producto = () => {
const [productos, setProductos] = React.useState([])
React.useEffect(()=>{
  getProductos()
},[])
const getProductos = async ()=>{
  await axios.get("/api/productos").then(response=>{
    setProductos(response.data)
    console.log(productos)
  })
}
const [form, setForm] = React.useState({
  nombre: "",
  precio: ""
});
const onInputChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/api/productos-create", form);
          setForm({ nombre: "", precio: "" }); 
          getProductos()
  } catch (e) {
    console.log("error" + e)
  }
  }
  return (
    <>
    <div className='row justify-content-center'>
        <div className='col-12 col-sm-10 col-md-6 col-xl-4'>
          <form onSubmit={handleSubmit}>
          <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                type="text"
                name='nombre'
                value={form.nombre}
                onChange={onInputChange}
              />
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                type="number"
                name='precio'
                value={form.precio}
                onChange={onInputChange}
              />
              <button className='btn btn-primary mt-2'>Guardar</button>
          </form>
        </div>
    </div>
    <div className='container'>
    
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {
          productos.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
              <td>{element.precio}</td>
              <td><button className='btn btn-danger'>Eliminar</button></td>
              <td><button className='btn btn-primary'>Editar</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Producto