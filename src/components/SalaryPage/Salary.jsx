import React from 'react';
import './Salary.css';
import { useNavigate } from 'react-router-dom';

function Salary() {
  const navigate = useNavigate();

  const Exit = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <header className="header">
        <div className="titulo">WORKABLE</div>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#salarios">Salarios</a>
        </nav>
        <button className="exit-button" onClick={Exit}>
          🡨
        </button>
      </header>

      <main className="Titulo">
        <h1>Evalua los salarios promedio de tu sector</h1>
        <div className="link-ayuda">
          <a href="ayuda">Compara más de 4.179.960 sueldos registrados</a>
        </div>

        <div id="Dv1">
          <input type="text" placeholder="Nombre de la empresa" className="busqueda" />
          <button className="boton-busqueda">Buscar</button>
        </div>

        <div className="filters-container">
          <div className="filter-section">
            <h2>Salarios por categoria</h2>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Ventas
              </label>
              <label>
                <input type="checkbox" /> Administracion/Oficina
              </label>
              <label>
                <input type="checkbox" /> Almacen/Logistica
              </label>
              <label>
                <input type="checkbox" /> Medicina/Salud
              </label>
              <label>
                <input type="checkbox" /> Otros
              </label>
              <label>
                <input type="checkbox" /> Produccion/Operaciones
              </label>
              <label>
                <input type="checkbox" /> Servicios Generales
              </label>
              <label>
                <input type="checkbox" /> Atencion a clientes
              </label>
              <label>
                <input type="checkbox" /> Informatica/Telecomunicaciones
              </label>
              <label>
                <input type="checkbox" /> Ver todas las categorias
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h2>Salarios mas buscados</h2>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Comercial asesor 
              </label>
              <label>
                <input type="checkbox" /> Auxiliar contable
              </label>
              <label>
                <input type="checkbox" /> Auxiliar de bodega
              </label>
              <label>
                <input type="checkbox" /> Call center
              </label>
              <label>
                <input type="checkbox" /> Servicio al cliente
              </label>
              <label>
                <input type="checkbox" /> Operario/a
              </label>
              <label>
                <input type="checkbox" /> Asesor comercial
              </label>
              <label>
                <input type="checkbox" /> Telecomunicaciones
              </label>
              <label>
                <input type="checkbox" /> Tecnico/a
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h2>Salarios directivos</h2>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Medico nefrologo
              </label>
              <label>
                <input type="checkbox" /> Ingenieros/as financieros/as
              </label>
              <label>
                <input type="checkbox" /> Agente profesional
              </label>
              <label>
                <input type="checkbox" /> Almacenista atencion al cliente
              </label>
              <label>
                <input type="checkbox" /> Vicepresidente/a
              </label>
              <label>
                <input type="checkbox" /> Medico/especialista
              </label>
              <label>
                <input type="checkbox" /> Human resources
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Salary;
