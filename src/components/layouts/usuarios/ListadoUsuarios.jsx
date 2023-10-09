import Header from "../../helpers/Header";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  async function listarUsuarios() {
    let usuariosCollection = collection(dataBase, "usuarios");
    let data = await getDocs(usuariosCollection);
    console.log(usuariosCollection);
    console.log(data.docs);
    console.log(data.docs.map((doc) => doc.data()));
    setUsuarios(data.docs.map((doc) => doc.data()));
  }

  useEffect(()=>{
    listarUsuarios();
  },[])

  return (
    <section className="users">
      <Header />
      <section className="cards">
        <h1>Listado de usuarios</h1>
        <section className="cards-users">
          {
            usuarios.map((usuario)=>(
              <section className="card-user" key={usuario.contrasenaUsuario}>
                <h3>Contraseña: {usuario.contrasenaUsuario}</h3>
                <h3>Correo: {usuario.correoUsuario}</h3>
                <h3>Usuario: {usuario.nombreUsuario}</h3>
              </section>
            ))
          }
        </section>
      </section>
    </section>
  );
};

export default ListadoUsuarios;
