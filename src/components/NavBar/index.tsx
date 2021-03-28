import React from 'react';

import MenuIcon from '../../assets/menu.png';
import { Container, Links, Menu } from './styles';

const NavBar: React.FC = () => {

  const menuItems = ["Home", "Dogs", "Gallery", "News", "About", "Contact"];
  
  return (
    <Container>
      <Menu>
        <img src={MenuIcon} alt="menu"/>
      </Menu>
      <Links>
        {menuItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Links>
    </Container>
  )
}

export default NavBar;