import React from 'react';

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">
        <input id="search-input" type="text" placeholder="Buscar ofertas" />
        <button className="search-btn">BUSCAR</button>
      </div>
    </section>
    
  );
}

export default SearchSection;
