import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav className="list">
        <NavLink to='/inicio' activeStyle>
          <img src={require('../../images/logo1.png')} alt='logo' />
        </NavLink>
        <Bars/>
        
        <NavMenu>

          <NavLink to='/inicio' activeStyle>
            Inicio
          </NavLink>

          <NavLink to='/empresas' activeStyle>
            Empresas
          </NavLink>

          <NavLink to='/personas' activeStyle>
            Personas
          </NavLink>

          <NavBtn>
          <NavBtnLink to='/portafolio'>Portafolio</NavBtnLink>
        </NavBtn>

        </NavMenu>

        
        
      </Nav>
    </>
  );
};

export default Navbar;

