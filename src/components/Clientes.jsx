import React from 'react'
import axios from '../service/Api'

const Clientes = () => {
  
const [departamento, setDepartamento] = React.useState([])
const [ciudad, setCiudad] = React.useState([])
const [tipopersona, setTipopersona] = React.useState([])
const [cliente, setCliente] = React.useState([])
const [form, setForm] = React.useState({
  nombre: "",
  id_tipo_persona: "",
  apellido: "",
  celular: "",
  cedula: "",
  id_ciudad: "",
  id_departamento: ""
});

  React.useEffect(() => {
   
    getTipoPersona()
    getCliente()
  },[]);
  React.useEffect(() => {
    getDepartamento()
    
  },[departamento]);

const getCliente = async ()=>{
  await axios.get("/api/clientes").then(response=>{
    setCliente(response.data)
    console.log(cliente)
  })
}

const getDepartamento = async ()=>{
  fetch("http://localhost:4000/api/departamento").then(response=>(
    response.json()).then(data=>{
      setDepartamento(data)   
      getCiudadxDepartamento()
}))
}
const getCiudadxDepartamento =  async ()=>{
    await axios.get(`/api/ciudad/depa/${modo}`).then(response=>{
      setCiudad(response.data)
    })
}

const getTipoPersona =  async ()=>{
  await axios.get("api/tipopersona").then(response=>{
    setTipopersona(response.data)
  })
}
  
const onInputChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/api/clientes-create", form);
          setForm({ nombre: "", id_tipo_persona: "", apellido: "", celular: "", cedula: "", id_ciudad: "", id_departamento: "" }); 
          getCliente()
  } catch (e) {
    console.log("error" + e)
  }
  }

  const [modo, setModo]= React.useState('-1')
  const HandlerCargar= function(e) {
    const opcion = e.target.value;
    console.log(opcion)
    setModo(opcion)
}
  return (
    <>
    <div className='row justify-content-center'>
    <div className="col-12 col-sm-10 col-md-6 col-xl-4">
      <form onSubmit={handleSubmit}>
      <label>
        Tipo Persona
      </label>
      <select className="form-select mb-3" name="id_tipo_persona" value={form.id_tipo_persona} onChange={onInputChange} id="SelCategorias">
      <option value={-1}> Selecione un tipo de persona</option>
              {
                tipopersona.map((item)=>(
                  <option key={"tipo_persona"}value={item.nombre}>{item.nombre}</option>
                ))
              }
      </select>

      <label>
            Nombre: 
       </label>
       <input
         className="form-control"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={onInputChange}
         />
          <label>
            Apellido: 
       </label>
       <input
         className="form-control"
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={onInputChange}
         />
          <label>
            Cedula: 
       </label>
       <input
         className="form-control"
          type="text"
          name="cedula"
          value={form.cedula}
          onChange={onInputChange}
         />
          <label>
            Celular: 
       </label>
       <input
         className="form-control"
          type="text"
           name="celular"
          value={form.celular}
          onChange={onInputChange}
         />
          
          <label>
        Departamento:
      </label>
      <select className="form-select mb-3" name="id_departamento" id="selDepartamento" value={form.id_departamento} onChange={onInputChange} onClickCapture={HandlerCargar}>
              <option value={-1}> Selecione un Departamento</option>
              {
                departamento.map((item)=>(
                  <option key={"departamento"}value={item.id}>{item.nombre}</option>
                ))
              }
      </select>

      <label>
        Ciudad:
      </label>
      <select className="form-select mb-3" name="id_ciudad" id="SelCategorias" value={form.id_ciudad} onChange={onInputChange}>
              <option value={-1}> Selecione una Ciudad</option>
              {
                ciudad.map((item)=>(
                  <option key={"ciudad"}value={item.nombre}>{item.nombre}</option>
                ))
                
              }
      </select>
      <button className='btn btn-primary'>Registrar</button>
      </form>
    </div>
    </div>
    <div className='container'>
    
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Tipo Persona</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cedula</th>
      <th>Celular</th>
      <th>Ciudad</th>
      <th>Departamento</th>
      <th>Eliminar</th>
      <th>Editar</th>
    </tr>
  </thead>
  <tbody>
    {
      cliente.map(element =>(
        <tr>
          <td>{element.id}</td>
          <td>{element.id_tipo_persona}</td>
          <td>{element.nombre}</td>
          <td>{element.apellido}</td>
          <td>{element.cedula}</td>
          <td>{element.celular}</td>
          <td>{element.id_ciudad}</td>
          <td>{element.id_departamento}</td>
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

export default Clientes