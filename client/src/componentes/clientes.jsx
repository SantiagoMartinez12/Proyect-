import React from "react";
import { useSelector } from "react-redux";
import './clientes.css'



export default function Lista(){

    const cervezas = useSelector(state => state.cervezas);

    return(

        // <div>
        //     <h1>Componente Lista</h1>
        // </div>
        <div className="grid-container">
            <div className="Logo"><h4>Logo</h4></div>
            <div className="Cervezas"><h3>Cervezas</h3></div>
            <div className="Precio"><h4>Precio</h4></div>
                <div className="Detalle">
                    <h3>Acá renderizaría el listado de cervezas</h3>

                </div>
                    <div className="Filtros">
                        <div className="Filtrar"><p>Filtrar como quieras</p></div>
                        <div className="Buscar"><p>Un searchbar podría funcionar</p></div>
                    </div>
        </div>
    )  
}