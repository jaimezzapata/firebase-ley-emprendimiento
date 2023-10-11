import { useState } from "react";
import Header from "../../helpers/Header";

const CrearUsuario = () => {
    const [nombre, setNombre] = useState()
    const [correo, setCorreo] = useState()
    const [contrasena, setContrasena] = useState()
  return (
    <div>
      <Header />
      <section>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="button">
            <i className="fa-solid fa-save"></i>
          </button>
        </form>
      </section>
    </div>
  );
};

export default CrearUsuario;
