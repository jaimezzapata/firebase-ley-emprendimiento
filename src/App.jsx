import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/helpers/Home'
import ListadoUsuarios from './components/layouts/usuarios/ListadoUsuarios'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/usuarios',
    element: <ListadoUsuarios />
  },
])

function App() {

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  )
}

export default App