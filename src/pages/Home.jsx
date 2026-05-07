import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import PortfolioGrid from '../components/PortfolioGrid'
import { servicesData } from '../data/servicesData'
import { portfolioData } from '../data/portfolioData'
import { testimonialsData } from '../data/testimonialsData'

function Home() {
  return (
    <>
      <HeroSection />

      <section className="section-spacing">
        <div className="container">
          <h2 className="section-title">Featured Services</h2>
          <div className="row g-4 mt-1">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <h2 className="section-title">Portfolio Preview</h2>
          <PortfolioGrid projects={portfolioData.slice(0, 3)} />
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="row g-4 mt-1">
            {testimonialsData.map((testimonial) => (
              <div className="col-md-4" key={testimonial.id}>
                <div className="glass-card h-100 p-4">
                  <p className="text-secondary mb-3">"{testimonial.message}"</p>
                  <h6 className="mb-1">{testimonial.name}</h6>
                  <small className="text-accent">{testimonial.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
