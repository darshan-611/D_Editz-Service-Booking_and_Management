import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card service-card h-100 border-0">
        <img src={service.image} className="card-img-top" alt={service.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text text-secondary">{service.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="price-tag">{service.price}</span>
            <Link className="btn btn-brand" to="/booking">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
