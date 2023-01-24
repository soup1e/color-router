import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/rgb/148/41/17">Red</NavLink>
      <NavLink to="/rgb/44/66/63">Green</NavLink>
      <NavLink to="/rgb/63/136/197">Blue</NavLink>
    </div>
  );
}
