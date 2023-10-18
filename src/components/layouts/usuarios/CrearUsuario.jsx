import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Header from "../../helpers/Header";

const CrearUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const returnListado = useNavigate()

  async function agregarUsuario() {
    let usuarioCollection = collection(dataBase, "usuarios");
    let usuario = { nombre, correo, contrasena };
    await addDoc(usuarioCollection, usuario);
    returnListado('/usuarios')
  }

  return (
    <divc className="usuarios">
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
    </divc>
  );
};

export default CrearUsuario;
