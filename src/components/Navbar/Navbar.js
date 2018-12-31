import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './navBar.style.css'


class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/login'>FitClub</Link>
        </nav>
      </div>
    )
  }
}
export default NavBar