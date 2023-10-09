import Header from "../../helpers/Header";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState();

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
      Listado de Usuarios
    </section>
  );
};

export default ListadoUsuarios;
