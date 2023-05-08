import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='contenedorHeader'>
        
      <h1 className='logo'>Barbería Man Cut</h1>
      <nav>
        <ul className='enlacesHeader'>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/barberos">Barberos</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
