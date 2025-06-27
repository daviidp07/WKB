import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUpPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/page4');
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="signupContainer">
      <button className="exitButton" onClick={handleExit}>
        🡨
      </button>
      <form className="signupForm" onSubmit={handleSubmit}>
        <h1>Registrarse</h1>
          <div className="separator">
        </div>
        <div className="formGroup">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingresa tu usuario"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirma tu contraseña"
            required
          />
        </div>

        <div className="formGroup checkboxGroup">
          <label>
            <input
              type="checkbox"
              id="aspirante"
              name="role"
              value="aspirante"
            />
            Aspirante
          </label>
          <label>
            <input
              type="checkbox"
              id="reclutador"
              name="role"
              value="reclutador"
            />
            Reclutador
          </label>
        </div>

        <div className="formGroup">
          <button type="submit">Registrarse</button>
        </div>

        <div className="googleSignup">
          <span className="googleIcon"></span>
          Registrarse con Google
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
