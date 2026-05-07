import { NavLink } from 'react-router-dom'
import logo from '../assets/d-editz-logo.jpeg'

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container py-2">
        <NavLink
          className="navbar-brand fw-bold brand-text d-flex align-items-center gap-2"
          to="/"
        >
          <span className="brand-logo-wrap">
            <img src={logo} alt="D EDITZ logo" className="brand-logo" />
          </span>
          <span>D EDITZ</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto gap-lg-2">
            {[
              ['/', 'Home'],
              ['/services', 'Services'],
              ['/booking', 'Booking'],
              ['/portfolio', 'Portfolio'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <li className="nav-item" key={path}>
                <NavLink className="nav-link nav-pill" to={path}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppNavbar
