import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="">Empleados</Link>
        </nav>
    </header>
  )
}

export default Header