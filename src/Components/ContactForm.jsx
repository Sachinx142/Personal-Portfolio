import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 🚀 Frontend Validation Logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="contact-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-primary fw-bold">Get In Touch</h2>
          <p className="text-muted">Feel free to reach out to me. I’d love to hear from you!</p>
          <hr className="w-50 mx-auto"/>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow border-0 p-4">
              <form onSubmit={handleSubmit}>
                
                {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
                {errors.submit && <div className="alert alert-danger text-center">{errors.submit}</div>}

                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Enter your name"
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
