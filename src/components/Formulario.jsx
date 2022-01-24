import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Formulario = () => {

  const [datos, setDatos] = useState({
    os: "",
    clasificacion: "",
    descripcion: "",
    bloque: "",
    columna: "",
    fila: "",
    lado: "",
  });
  const { os, clasificacion, descripcion, bloque, columna, fila, lado } = datos;

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [os, clasificacion, descripcion, bloque, columna, fila, lado].includes("")
    ) {
        console.log('error');
        return;
    }
    console.log(datos);

    fetch('http://localhost:5000/api/items',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(datos)
    })

    setDatos({
      os: "",
      clasificacion: "",
      descripcion: "",
      bloque: "",
      columna: "",
      fila: "",
      lado: "",
    });


  };

  return (
    <div className="contenedor">
      <div className="menuIngreso">
        <Link to="/">
          <i className="fas fa-arrow-left salir"></i>
        </Link>
        <span>Ingreso</span>
      </div>
      <form className="formulario">
        <label htmlFor="os">OS</label>
        <input
          type="number"
          id="os"
          name="os"
          value={os}
          placeholder="Colocar OS"
          onChange={handleChange}
        />
        <label htmlFor="clasificacion">CLASIFICACION</label>
        <select
          id="clasificacion"
          name="clasificacion"
          value={clasificacion}
          onChange={handleChange}
        >
          <option value="">--Seleccione una Opcion--</option>
          <option value="evaluado">Evaluado</option>
          <option value="repuesto">Repuesto</option>
          <option value="base">Base</option>
          <option value="compra local">Compra Local</option>
        </select>
        <label htmlFor="descripcion">DESCRIPCION</label>
        <input
          type="text"
          placeholder="Nombre del Item"
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />
        <div className="ubicacion">
          <div className="bloque">
            <label htmlFor="bloque">BLOQUE</label>
            <select
              name="bloque"
              id="bloque"
              value={bloque}
              onChange={handleChange}
            >
              <option value="">----</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <div className="columna">
            <label htmlFor="columna">COLUMNA</label>
            <select
              name="columna"
              id="columna"
              onChange={handleChange}
              value={columna}
            >
              <option value="">----</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="fila">
            <label htmlFor="fila">FILA</label>
            <select name="fila" id="fila" onChange={handleChange} value={fila}>
              <option value="">----</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="lado">
            <label htmlFor="lado">LADO</label>
            <select name="lado" id="lado" onChange={handleChange} value={lado}>
              <option value="">----</option>
              <option value="D">D</option>
              <option value="I">I</option>
              <option value="U">U</option>
            </select>
          </div>
        </div>
        <input
          className="enviar"
          type="submit"
          value="Enviar"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
