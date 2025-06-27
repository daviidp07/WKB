import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page4.css';

const UserPage = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="bg-page">
      <div className="cont-main">
        <div className="header-p4">
          <span className="brand-name">WORKABLE</span>
          <span className="plan-name">Enterprise Plus 1000</span>
          <button className="btn-exit" onClick={handleExit}>
            🡨
          </button>
        </div>
        <div className="nav-p4">
          <div className="nav-item">
            <div className="icon-nav icon-home"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            <span className="link-nav">Inicio</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-recruit"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
            </svg>
            <span className="link-nav">Reclutamiento</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-review"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
              <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
              <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
           </svg>
            <span className="link-nav">Reviews</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-employer"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
            <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
          </svg>
            <span className="link-nav">Employer Branding</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-report"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
           </svg>
            <span className="link-nav">Informes</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-setting"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-nut" viewBox="0 0 16 16">
              <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z"/>
              <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z"/>
          </svg>
            <span className="link-nav">Configuración</span>
          </div>
          <div className="nav-item">
            <div className="icon-nav icon-support"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            <span className="link-nav">Soporte</span>
          </div>
        </div>
        <div className="main-cont">
          <div className="col-left">
            <div className="info-company">
              <div className="logo-company"></div>
              <div>
                <h2 className="name-company">Empresa genérica</h2>
                <p>Usuario administrador</p>
              </div>
            </div>
            <div className="section-recruit">
              <div className="header-recruit">
                <h3 className="title-section">Reclutamiento</h3>
                <span className="link-manage">Gestionar avisos</span>
              </div>
              <div className="cards-recruit">
                <div className="card-recruit">
                  <div className="circle-placeholder"></div>
                  <p>Avisos publicados</p>
                </div>
                <div className="card-recruit">
                  <div className="circle-placeholder"></div>
                  <p>Avisos destacados</p>
                </div>
                <div className="card-recruit">
                  <div className="circle-placeholder"></div>
                  <p>Avisos urgentes</p>
                </div>
              </div>
              <div className="cont-btn-publish">
                <button className="btn-publish">Publicar oferta</button>
              </div>
            </div>
            <div className="section-stats">
              <div className="header-stats">
                <h3 className="title-section">Estadística</h3>
                <span className="link-more">Ver más estadísticas</span>
              </div>
              <div className="graphs-stats">
                <div className="card-graph">
                  <div className="graph-placeholder"></div>
                  <p>Avisos Activos</p>
                </div>
                <div className="card-graph">
                  <div className="graph-placeholder"></div>
                  <p>Postulantes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="img-placeholder"></div>
            <div className="section-review">
              <div className="header-review">
                <h3 className="title-section">Reviews</h3>
                <span className="link-review">Ver reviews</span>
              </div>
              <div className="cont-review">
                <p>Evaluación general</p>
                <div className="stars-review">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p>Evaluaciones</p>
                <div className="users-review">
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                  <i className="fas fa-user"></i>
                </div>
                <p>Comentarios</p>
                <div className="comments-review">
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                  <i className="fas fa-comment"></i>
                </div>
              </div>
            </div>
            <div className="section-branding">
              <h3 className="title-section">Employer Branding</h3>
              <p>Mejora la reputación de tu empresa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
