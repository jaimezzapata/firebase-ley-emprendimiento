import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/helpers/Home'
import ListadoUsuarios from './components/layouts/usuarios/ListadoUsuarios'
import CrearUsuario from './components/layouts/usuarios/CrearUsuario'
import EditarUsuario from './components/layouts/usuarios/EditarUsuario'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/usuarios',
    element: <ListadoUsuarios />
  },
  {
    path: '/crear',
    element: <CrearUsuario />
  },
  {
    path: '/actualizar/:id',
    element: <EditarUsuario />
  }
])

function App() {

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  )
}

export default App