import React, { Component } from 'react';
import styles from './login.style.css'


class NavBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text" 
          placeholder="Usuario"
        />
        <input 
          type="password"
          placeholder="Contraseña"
        />
        <button 
          type="button"
        >
          Entrar
        </button>
      </div>
    )
  }
}
export default NavBar