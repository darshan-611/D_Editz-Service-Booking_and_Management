function PortfolioGrid({ projects }) {
  return (
    <div className="row g-4">
      {projects.map((project) => (
        <div className="col-md-6 col-lg-4" key={project.id}>
          <div className="card portfolio-card border-0 h-100">
            <img src={project.image} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <p className="small text-accent mb-1">{project.category}</p>
              <h6 className="mb-0">{project.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioGrid
