import React from 'react';
import { Link } from 'react-router-dom';
import './PubVacante.css';

function PubVacante() {
    return (
    <>
        <header className='HeadVacnt'>
            <h1>WORKABLE</h1>
            <div className="DropAcceso">
                <h2>Acceso reclutadores registrados</h2>
            <div className="DropForm">
                <input type="email" placeholder="E-mail" />
                <a href="#">¿No recuerdas tu e-mail?</a>
                <input type="password" placeholder="Contraseña" />
                <a href="#">¿No recuerda su contraseña ?</a>
                <div className="checkbox">
                    <input type="checkbox" id="stay" />
                    <label htmlFor="stay">Permanecer conectado</label>
                </div>
                <button type="submit">Entrar</button>
            </div>
        </div>
        </header>

        <section className='FormVacant'>
            <h3>Regístrate para publicar tus vacantes</h3>
            <p>Únete a la mayor red de empleo de Latinoamérica</p>

            <form>
                <input type="text" placeholder='Nombre y apellidos' />
                <input type="text" placeholder='Teléfono' />
                
                <input type="email" placeholder='Correo de acceso' />
                <input type="password" placeholder='Contraseña' />
                
                <input type="text" placeholder='Nombre comercial de la empresa' />
                <input type="text" placeholder='Razón social' />
                
                <select>
                    <option value="">Colombia</option>
                    <option value="mexico">México</option>
                    <option value="peru">Perú</option>
                </select>
                <input type="text" placeholder='NIT' />
                
                <input type="text" placeholder='Ciudad o Código postal' />
                <select>
                    <option value="">Selecciona el sector</option>
                    <option value="tec">Tecnología</option>
                    <option value="salud">Salud</option>
                </select>
                
                <select>
                    <option value="">N° de trabajadores</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                </select>

                <select>
                    <option value="">N° de vacantes anuales</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                </select>

                <button type="submit" className='BtnCuenta'>Crear cuenta</button>
            </form>
        </section>

        <div className='TxtVacant'>
            <p>¡Únete a nosotros y publica ofertas gratis! Ahorra costos y tiempo en tus procesos de selección y consigue el candidato ideal de una forma rápida y fácil</p>
        </div>
    </>
    );
}

export default PubVacante;




