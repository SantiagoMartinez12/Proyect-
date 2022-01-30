import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./leinster.module.css"

export default function Leinster(){
    const cervezas = useSelector((state) => state.cervezas)
    console.log(cervezas)
    const [input, setInput] = useState({
        name: "",
        description:"",
        platforms:[],
        background_image:"",
        released:"",
        rating:"",
        genres:[]

    })
    return(
        <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.seleccion}>
            {
                cervezas?.map( el => {
                    return (
                      <div className={styles.cerveza}>
                        <h1>Nombre:{el.nombre}</h1>
                        <p>Estilo:{el.estilo}</p>
                        <p>Descripcion:{el.descripcion}</p>
                        <p>Precio:{el.precio}</p>
                      </div>
                    )
                      
                    
                })
            }
            

        </div>
        <div className={styles.creacion}>
            <h1>crear cerveza</h1>
            <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
        </div>
      </div>
    )
}