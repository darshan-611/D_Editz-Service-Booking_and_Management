import logo from '../assets/d-editz-logo.jpeg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-4 text-center">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <span className="brand-logo-wrap footer-logo">
            <img src={logo} alt="D EDITZ logo" className="brand-logo" />
          </span>
          <h5 className="mb-0 text-light">D EDITZ</h5>
        </div>
        <p className="mb-1 text-secondary">
          Creative visuals for modern brands and creators.
        </p>
        <small className="text-secondary">
          © {new Date().getFullYear()} D EDITZ SERVICE BOOKING AND ORDER MANAGEMENT
          SYSTEM
        </small>
      </div>
    </footer>
  )
}

export default Footer
