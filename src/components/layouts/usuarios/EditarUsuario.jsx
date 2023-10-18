import Header from "../../helpers/Header";
import { dataBase } from "../../config/firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";

const EditarUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const returnListado = useNavigate();
  let { id } = useParams();

  const actualizarUsuario = async () => {
    let usuarioCollection = doc(dataBase, "usuarios", id);
    let usuario = { nombre, correo, contrasena };
    await updateDoc(usuarioCollection, usuario);
    returnListado("/usuarios");
  };

  async function getUsuarioId(id) {
    let usuarioNuevo = await getDoc(doc(dataBase, "usuarios", id));
    setNombre(usuarioNuevo.data().nombre);
    setCorreo(usuarioNuevo.data().correo);
    setContrasena(usuarioNuevo.data().contrasena);
  }

  useEffect(() => {
    getUsuarioId(id);
  }, []);

  return (
    <div className="usuarios">
      <Header />
      <section className="listado-usuarios">
        <form action="">
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            type="text"
          />
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo"
            type="text"
          />
          <input
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Contraseña"
            type="password"
          />
          <button onClick={actualizarUsuario} type="button">
            <i className="fa-solid fa-save"></i>
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditarUsuario;
