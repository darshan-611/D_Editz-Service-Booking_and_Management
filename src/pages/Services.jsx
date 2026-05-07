import ServiceCard from '../components/ServiceCard'
import { servicesData } from '../data/servicesData'

function Services() {
  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="section-title">Our Design Services</h2>
        <p className="text-secondary mb-4">
          Choose from our premium creative services tailored for your brand.
        </p>
        <div className="row g-4">
          {servicesData.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
