import { useState } from 'react'

function Contact() {
  const [messageSent, setMessageSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessageSent(true)
    event.target.reset()
  }

  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="section-title mb-4">Contact Us</h2>
        <div className="row g-4">
          <div className="col-lg-7">
            <form className="glass-card p-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control custom-input" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control custom-input" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea rows="5" className="form-control custom-input" required></textarea>
              </div>
              <button className="btn btn-brand" type="submit">
                Send Message
              </button>
              {messageSent && (
                <div className="alert alert-success mt-3 mb-0">
                  Message sent successfully.
                </div>
              )}
            </form>
          </div>

          <div className="col-lg-5">
            <div className="glass-card p-4 h-100">
              <h5>Business Info</h5>
              <p className="text-secondary mb-2">Email: hello@deditz.com</p>
              <p className="text-secondary mb-2">Phone: +91 90000 12345</p>
              <p className="text-secondary">Location: Hyderabad, India</p>
              <hr className="border-secondary-subtle" />
              <h6>Social Media</h6>
              <div className="d-flex gap-2 flex-wrap">
                <span className="social-chip">Instagram</span>
                <span className="social-chip">Behance</span>
                <span className="social-chip">Dribbble</span>
                <span className="social-chip">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
