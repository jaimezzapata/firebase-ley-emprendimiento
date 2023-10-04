import Header from "../../helpers/Header";
import { useState } from "react";
import { dataBase } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState()

  async function listarUsuarios(){
   let usuariosCollection = collection(dataBase, 'usuarios')
   let data = await getDocs(usuariosCollection)
   console.log(usuariosCollection)
   console.log(data)
  }

  listarUsuarios()

  return (
    <section>
      <Header />
      Listado de Usuarios
    </section>
  );
};

export default ListadoUsuarios;
