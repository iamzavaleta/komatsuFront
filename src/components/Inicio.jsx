import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
      <div className="contenedor">
          <div className="menu">
              <h1>Menú Principal</h1>
          </div>
          <h3 className="sub">Hola</h3>
          <p className="sub_1">Seleccionar módulo: </p>
          <br />
          <div className="botones">
              <Link to="formulario"> <button className="btn btn_ingreso">Ingresos</button> </Link>
              <Link to="/"><button className="btn btn_salida">Salida</button></Link>
              <Link to="/" ><button className="btn btn_consulta">Consulta</button></Link>
          </div>
          <div className="cerrar">
              <u>Cerrar Sesíon</u>
          </div>
      </div>
  )
};
