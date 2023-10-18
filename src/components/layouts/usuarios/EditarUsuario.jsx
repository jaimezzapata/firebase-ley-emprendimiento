import Header from "../../helpers/Header";
import { dataBase } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditarUsuario = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const returnListado = useNavigate()
  
    return (
        <div className="usuarios">
          <Header />
          <section className="listado-usuarios">
            <form action="">
              <input
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                type="text"
              />
              <input
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Correo"
                type="text"
              />
              <input
                onChange={(e) => setContrasena(e.target.value)}
                placeholder="Contraseña"
                type="password"
              />
              <button onClick={agregarUsuario} type="button">
                <i className="fa-solid fa-save"></i>
              </button>
            </form>
          </section>
        </div>
      );
}

export default EditarUsuario