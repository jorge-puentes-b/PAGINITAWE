import React from 'react';
import './BuscarHogar.css';
import casa1 from './casa1.png'; 
import casa2 from './casa2.png';

function BuscarHogar() {
  return (
    <div className="buscar-hogar-container">
      <header className="header">
        <div className="title">
          <span role="img" aria-label="emoji">😊</span> Busca Tu Hogar InmoClick
        </div>
        <div className="user-info">
          <span>Nombre Usuario</span>
          <span className="icon">&#128100;</span> {/* User icon */}
          <span className="icon">&#128276;</span> {/* Notification icon */}
          <span className="icon">&#128465;</span> {/* Logout icon */}
        </div>
      </header>
      
      <div className="description">
        Aquí encontrarás una amplia variedad de propiedades que se adaptan a tus necesidades. Filtra por ubicación, precio, número de habitaciones, tamaño y muchas otras características para encontrar el inmueble perfecto. Guarda tus búsquedas favoritas y compara propiedades de forma sencilla. ¡Con InmoClick, encontrar tu nuevo hogar es una experiencia personalizada!
      </div>

      <div className="filters">
        <select>
          <option value="">Sector</option>
          {/* Add sector options */}
        </select>
        <select>
          <option value="">Costo</option>
          {/* Add cost options */}
        </select>
        <select>
          <option value="">Tipo Vivienda</option>
          {/* Add housing type options */}
        </select>
      </div>

      <div className="property-list">
        <div className="property-item">
          <h3>APARTAESTUDIO</h3>
          <div className="property-details">
            <div className="property-image">
              <img src={casa1} alt="Casa 1" />
            </div>
            <div className="property-description">
              <p>Descripción del inmueble...</p>
              <div className="property-actions">
                <button>Compartir</button>
                <button>Cita ver Inmueble</button>
                <button>Información Arrendador</button>
                <button>Visualización</button>
              </div>
            </div>
          </div>
        </div>

        <div className="property-item">
          <h3>APARTAMENTO VIS</h3>
          <div className="property-details">
            <div className="property-image">
              <img src={casa2} alt="Casa 2" />
            </div>
            <div className="property-description">
              <p>Descripción del inmueble...</p>
              <div className="property-actions">
                <button>Compartir</button>
                <button>Cita ver Inmueble</button>
                <button>Información Arrendador</button>
                <button>Visualización</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuscarHogar;
