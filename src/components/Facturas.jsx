import React from 'react'
import axios from '../service/Api'
const Facturas = () => {
const [cliente, setCliente] = React.useState([])
const [productos, setProductos] = React.useState([])
const [facturas, setFacturas] = React.useState([])
React.useEffect(()=>{
  getCliente()
  getProductos()
  getFacturas()
},[])
const [form, setForm] = React.useState({
  id_cliente: "",
  id_producto: "",
  cantidad: ""
});
const getCliente = async ()=>{
  await axios.get("/api/clientes").then(response=>{
    setCliente(response.data)
    console.log(cliente)
  })
}
const getProductos = async ()=>{
  await axios.get("/api/productos").then(response=>{
    setProductos(response.data)
    console.log(productos)
  })
}
const getFacturas = async ()=>{
  await axios.get("/api/facturas").then(response=>{
    setFacturas(response.data)
    console.log(facturas)
  })
}
const onInputChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/api/facturas-create", form);
          setForm({ id_cliente: "", id_producto: "", cantidad:"" }); 
          getFacturas()
  } catch (e) {
    console.log("error" + e)
  }
  }
  return (
    <>
    <div className='row justify-content-center'>
      <div className="col-12 col-sm-10 col-md-6 col-xl-4">
        <form onSubmit={handleSubmit}>
        <label>
        Cliente
      </label>
      <select className="form-select mb-3" id="SelCategorias" name="id_cliente" value={form.id_cliente} onChange={onInputChange} >
              <option value={-1}> Selecione una Cliente</option>
              {
                cliente.map((item)=>(
                  <option key={"cliente"}value={item.nombre+ item.apellido}>{item.cedula+": "+item.nombre+" "+ item.apellido}</option>
                ))
              }
      </select>
      <label>
        Producto
      </label>
      <select className="form-select mb-3"  id="SelCategorias" name="id_producto" value={form.id_producto} onChange={onInputChange} >
              <option value={-1}> Selecione un Producto</option>
              {
                productos.map((item)=>(
                  <option key={"producto"}value={item.nombre}>{item.id+": "+item.nombre}</option>
                ))
              }
      </select>
      <label>
            Cantidad: 
       </label>
       <input
         className="form-control"
          type="number"
          name="cantidad" 
          value={form.cantidad} 
          onChange={onInputChange} 
         />
         <button className='btn btn-primary mt-3'>Registrar</button>
        </form>
      </div>
    </div>
    <div className='container'>
             <table class="table">
      <thead>
            <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                  <th>Editar</th> 
            </tr>
              </thead>
              <tbody>
                {
                  facturas.map(element=>(
                    <tr> 
                    <td>{element.id}</td>
                    <td>{element.id_cliente}</td>
                    <td>{element.id_producto}</td>
                    <td>{element.cantidad}</td>
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

export default Facturas