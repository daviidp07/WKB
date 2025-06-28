import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">
        <h2>WORKABLE</h2>
        <div class="menu_list">
          <a href=''>
            Buscar Ofertas
          </a>
          <a href='/PerfilPro'>Perfil </a>
          <a href='/Salary'>Salarios</a>
        </div>
        <div className="menu_user">
          <a href='/administrador'>Inicio</a>
          <button>
            <Link to="/Login" className="btn-link">Iniciar Sesión</Link>
          </button>
          <button>
            <Link to="/SignUp" className="btn-link">Registrarse</Link>
          </button>
        </div>
      </header>
  );
}

export default Header;
