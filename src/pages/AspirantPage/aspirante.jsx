import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './aspirante.css';

const AspirantPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    
    const regresar = () => {
        navigate('/');
    };

    return (
        <div>
            <header>
                <div>jdjddj</div>
            </header>
            <div className="botones-container">
                <button className="boton">Ordenar ⌄</button>
                <button className="boton">Distancia ⌄</button>
                <button className="boton">Fecha ⌄</button>
                <button className="boton">Lugar de trabajo ⌄</button>
                <button className="boton">Experiencia ⌄</button>
                <button className="boton">Salario ⌄</button>
                <button className="boton">Jornada ⌄</button>
                <button className="boton">Contrato ⌄</button>
                <button className="boton">Discapacidad ⌄</button>
            </div>
            <div className='container'>
                <section id='sections'>
                    <div className='section_1'>
                        <nav>jdjdjdj</nav>
                        <div className="grid">
                            <div className="oferta_1" onClick={() => setSelected('Servicio 1')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 2')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 3')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 4')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 5')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 6')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 7')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 8')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 9')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 10')}>
                                <h3>Servicio</h3>
                            </div>
                            <div className="oferta_1" onClick={() => setSelected('Servicio 11')}>
                                <h3>Servicio</h3>
                            </div>
                        </div>
                    </div>
                    <div className='section_2'>
                        {selected ? (
                            <div>
                                <h2>Detalle de {selected}</h2>
                                <p>Aquí va toda la información detallada que quieras mostrar.</p>
                            </div>
                        ) : (
                            <div>
                                <p>Selecciona un servicio para ver los detalles aquí.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AspirantPage;
