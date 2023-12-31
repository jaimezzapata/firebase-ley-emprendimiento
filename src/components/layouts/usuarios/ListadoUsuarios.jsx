import Header from "../../helpers/Header";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  async function listarUsuarios() {
    let usuariosCollection = collection(dataBase, "usuarios");
    let data = await getDocs(usuariosCollection);
    console.log(usuariosCollection);
    console.log(data.docs);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log(data.docs.map((doc) => doc.data()));
    setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  /* Spread operator 
  
  Copio la información de un arreglo y la agrego en uno nuevo
  
  */

  // let numeros = [1, 2, 3, 4];
  // let letras = ["A", "B", "C", "D"];
  // let mezcla = [...numeros,...letras]
  // console.log(mezcla);

  const eliminarUsuario = async (id) => {
    let usuarioEliminado = doc(dataBase, "usuarios", id);
    await deleteDoc(usuarioEliminado);
    listarUsuarios();
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <section className="users">
      <Header />
      <section className="cards">
        <h1>Listado de usuarios</h1>
        <Link to="/crear"><i className="fa-solid fa-plus"></i></Link>
        <section className="cards-users">
          {usuarios.map((usuario) => (
            <section className="card-user" key={usuario.id}>
              <h3>Contraseña: {usuario.contrasena}</h3>
              <h3>Correo: {usuario.correo}</h3>
              <h3>Usuario: {usuario.nombre}</h3>
              <section className="acciones">
                <button onClick={() => eliminarUsuario(usuario.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button>
                  <Link to={'/actualizar/'+usuario.id}><i className="fa-solid fa-pencil"></i></Link>
                </button>
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default ListadoUsuarios;
