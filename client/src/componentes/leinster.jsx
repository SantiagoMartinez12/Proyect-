import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCervezas, { postCervezas } from "../store/action";
import styles from "./leinster.module.css"

export default function Leinster(){
  const dispatch = useDispatch()
    const cervezas = useSelector((state) => state.cervezas)
    console.log(cervezas)
    const [input, setInput] = useState({
        nombre: "",
        descripcion:"",
        estilo:"",
        precio:"",
    
    })
    console.log(input.nombre)
    function  handleChange(e){
      setInput({
          ...input,
          [e.target.name]: e.target.value

      })
    }
    function handleSubmit(e){
      e.preventDefault()
      dispatch(postCervezas(input))

      alert("Creado exitosamente")
      setInput({
        nombre: "",
        descripcion:"",
        estilo:"",
        precio:"",
              })
  dispatch(getCervezas())
            
  
}
let cont = 0
    return(
        <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.seleccion}>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estilo</th>
      <th scope="col">Preio</th>
      <th scope="col">Accion</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {
      cervezas?.map( el => {
        return (
          <tr> 
            <th scope="row">{cont = cont + 1}</th>
            <td>{el.nombre}</td>
            <td>{el.estilo}</td>
            <td>{el.precio}</td>
            <td><button>modificar</button></td>
 {/*            <div className="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
        
          </tr>
        )
          
        
    })
    }
   {/*  <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
   {/*  <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>


         {/*  <table>
            <th scope="col">Nombre</th>
            <th scope="col">Estilo</th>
            <th scope="col">precio</th>
            {
                cervezas?.map( el => {
                    return (
                      <div>
                        <h4>Nombre:{el.nombre}</h4>
                        <p>Estilo:{el.estilo}</p>
                        <p>Descripcion:{el.descripcion}</p>
                        <p>Precio:{el.precio}</p>
                      </div>
                    )
                      
                    
                })
            }
            
            </table> */}
          </div>
        <div className={styles.creacion}>
            <h1>crear cerveza</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder=" Nombre" aria-label="First name" name="nombre" value={input.nombre} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Estilo" aria-label="Last name" name="estilo" value={input.estilo} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Descripcion" aria-label="Last name" name="descripcion" value={input.descripcion} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Precio" aria-label="Last name" name="precio" value={input.precio} onChange={(e)=>handleChange(e)}/>
  </div>
</div>
<button type="submit" class="btn btn-primary">Crear</button>

</form>
        </div>
      </div>
    )
}