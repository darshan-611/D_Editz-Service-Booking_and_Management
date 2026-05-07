import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="hero-section text-center">
      <div className="container py-5">
        <p className="text-uppercase small text-accent mb-2">D EDITZ</p>
        <h1 className="hero-title">Creative Designs That Build Brands</h1>
        <p className="hero-subtitle mx-auto">
          Premium design services for creators, startups, and businesses looking
          to stand out in the digital world.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <Link to="/services" className="btn btn-brand">
            Explore Services
          </Link>
          <Link to="/booking" className="btn btn-outline-light btn-hover">
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
