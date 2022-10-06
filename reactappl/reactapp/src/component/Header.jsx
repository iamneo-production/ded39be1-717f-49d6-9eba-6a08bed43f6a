import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logs"
        src="https://res.cloudinary.com/hanush/image/upload/v1664889229/Pngtree_children_education_logo_-_happy_5212460.png_wb1xsp.png"
      />
      <h1 className="title">Abacus Academy</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link link-b" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link link-b" to="/signup">
          Register Form
        </Link>
      </li>
      <br/>
      <li className="link-item link-b">
        <Link className="route-link link-c" to="/login">
          LogIn Form
        </Link>
      </li>
      <li className="link-item link-b">
        <Link className="route-link link-c" to="/login">
          Student Reviews
        </Link>
      </li>
      <li className="link-item link-b">
        <Link className="route-link link-c" to="/login">
          About Us
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
