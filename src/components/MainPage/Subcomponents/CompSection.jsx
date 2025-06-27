import React from 'react'

function CompSection() {
  return (
    <section className="comp-section">
      <h1 className="title">EMPRESAS PRESENTES</h1>
      <p className="text">Trabajamos con X empresas, para que tengas las mejores oportunidades</p>
      <div className="div-images">
        <div className="img-placeholder1"></div>
        <div className="img-placeholder2"></div>
        <div className="img-placeholder3"></div>
        <div className="img-placeholder4"></div>
      </div>
      <hr className="divider" />
      <div className="large-img-placeholder"></div>
      <div className="promo">
        <h2 className="title">¡Encuentra ofertas de trabajo inclusivas!</h2>
        <p className="text">Estamos aquí para ayudarte a encontrar tu empleo ideal! 
        Miles de ofertas inclusivas te están esperando</p>
        <p className="text">Regístrate o inicia sesión de forma gratuita 
        Haz visible tu perfil y muestra tu currículum a empresas comprometidas con la inclusión</p>
      </div>
    </section>
  );
}

export default CompSection;
