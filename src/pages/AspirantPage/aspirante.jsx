import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './aspirante.css';

const AspirantPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const servicios = [
        { id: 1, nombre: 'Servicio 1', lugar: 'Medellín, Antioquia', tiempo: 'Hace 11 minutos' },
        { id: 2, nombre: 'Servicio 2', lugar: 'Bogotá, Cundinamarca', tiempo: 'Hace 1 hora' },
        { id: 3, nombre: 'Servicio 3', lugar: 'Cali, Valle', tiempo: 'Hace 2 días' },
        { id: 4, nombre: 'Servicio 4', lugar: 'Barranquilla, Atlántico', tiempo: 'Hace 3 días' },
        { id: 5, nombre: 'Servicio 5', lugar: 'Cartagena, Bolívar', tiempo: 'Hace 5 días' },
    ];

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
                            {servicios.map(servicio => (
                                <div 
                                    key={servicio.id}
                                    className="oferta_1"
                                     onClick={() => setSelected(servicio)}
                                >
                                    <h3>{servicio.nombre}</h3>
                                    <p className="location">{servicio.lugar}</p>
                                    <p className="time">{servicio.tiempo}</p>
                                    <button 
                                        className="boton-postular"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        Postularme
                                    </button>
                                    <button 
                                        className="boton-guardar"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        Guardar
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='section_2'>
                        {selected ? (
                            <div>
                                <h2>Detalle de {selected.nombre}</h2>
                                <p>Ubicación: {selected.lugar}</p>
                                <p>Publicado: {selected.tiempo}</p>
                                <p>
                                    Aaca para poner de todo
                                </p>
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
