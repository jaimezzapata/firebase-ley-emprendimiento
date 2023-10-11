import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../config/firebaseConfig";
import Header from "../../helpers/Header";

const CrearUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  async function agregarUsuario(){
   let usuarioCollection = collection(dataBase, 'usuarios')
   let usuario = {nombre, correo, contrasena}
   await addDoc(usuarioCollection, usuario)
  }

  return (
    <div>
      <Header />
      <section>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button onClick={agregarUsuario} type="button">
            <i className="fa-solid fa-save"></i>
          </button>
        </form>
      </section>
    </div>
  );
};

export default CrearUsuario;
