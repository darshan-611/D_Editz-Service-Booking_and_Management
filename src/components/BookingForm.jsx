import { useState } from 'react'
import { servicesData } from '../data/servicesData'

const API_URL = import.meta.env.VITE_API_URL

const initialFormState = {
  clientName: '',
  email: '',
  phone: '',
  serviceType: '',
  budget: '',
  requirement: '',
}

function BookingForm({ onAddBooking }) {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.clientName.trim())
      newErrors.clientName = 'Client name is required.'

    if (!formData.email.includes('@'))
      newErrors.email = 'Valid email is required.'

    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'Phone number must be 10 digits.'

    if (!formData.serviceType)
      newErrors.serviceType = 'Please select a service.'

    if (!formData.budget.trim())
      newErrors.budget = 'Budget is required.'

    if (formData.requirement.trim().length < 10)
      newErrors.requirement = 'Please add at least 10 characters.'

    return newErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentState) => ({
      ...currentState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitted(false)
      return
    }

    const bookingData = {
      name: formData.clientName,
      service: formData.serviceType,
      phone: formData.phone,
      message: formData.requirement,
    }

    try {
      const response = await fetch(
        `${API_URL}/api/bookings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        }
      )

      const data = await response.json()

      console.log('Booking Success:', data)

      if (onAddBooking) {
        onAddBooking(bookingData)
      }

      setFormData(initialFormState)
      setErrors({})
      setIsSubmitted(true)

    } catch (error) {
      console.error('Booking Failed:', error)
      alert('Booking failed')
    }
  }

  return (
    <div className="glass-card p-4 p-md-5">
      <h2 className="section-title mb-4">
        Book a Service
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">
              Client Name
            </label>

            <input
              type="text"
              name="clientName"
              className="form-control custom-input"
              value={formData.clientName}
              onChange={handleChange}
            />

            {errors.clientName && (
              <small className="text-danger">
                {errors.clientName}
              </small>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control custom-input"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <small className="text-danger">
                {errors.email}
              </small>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              className="form-control custom-input"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <small className="text-danger">
                {errors.phone}
              </small>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Service Type
            </label>

            <select
              name="serviceType"
              className="form-select custom-input"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">
                Choose Service
              </option>

              {servicesData.map((service) => (
                <option
                  value={service.title}
                  key={service.id}
                >
                  {service.title}
                </option>
              ))}
            </select>

            {errors.serviceType && (
              <small className="text-danger">
                {errors.serviceType}
              </small>
            )}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Budget
            </label>

            <input
              type="text"
              name="budget"
              className="form-control custom-input"
              placeholder="Ex: ₹3,000"
              value={formData.budget}
              onChange={handleChange}
            />

            {errors.budget && (
              <small className="text-danger">
                {errors.budget}
              </small>
            )}
          </div>

          <div className="col-12">
            <label className="form-label">
              Requirement Description
            </label>

            <textarea
              rows="4"
              name="requirement"
              className="form-control custom-input"
              value={formData.requirement}
              onChange={handleChange}
            ></textarea>

            {errors.requirement && (
              <small className="text-danger">
                {errors.requirement}
              </small>
            )}
          </div>

        </div>

        <button
          type="submit"
          className="btn btn-brand mt-4"
        >
          Submit Booking
        </button>

        {isSubmitted && (
          <div className="alert alert-success mt-3 mb-0">
            Booking submitted successfully.
            We will contact you soon.
          </div>
        )}
      </form>
    </div>
  )
}

export default BookingForm