import React, { Component } from 'react';
import './style.css';
import ListItems from './list-items';
import Logo from './logo';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <Logo text='Logo' />
        <ListItems />
      </div>
    );
  }
}

export default Header;
