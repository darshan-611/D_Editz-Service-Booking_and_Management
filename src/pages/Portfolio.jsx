import PortfolioGrid from '../components/PortfolioGrid'
import { portfolioData } from '../data/portfolioData'

function Portfolio() {
  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="text-secondary mb-4">
          A showcase of branding, posters, thumbnails, and campaign visuals.
        </p>
        <PortfolioGrid projects={portfolioData} />
      </div>
    </section>
  )
}

export default Portfolio
