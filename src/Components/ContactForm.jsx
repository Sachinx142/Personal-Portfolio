import React, { useState } from 'react';
import axios from 'axios';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  let [errors,setErros] = useState({})
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
    const newErrors = {}
    if(!formData.name.trim())  newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
   }
   else if(!/^\S+@\S+\.\S+$/.test(formData.email)){
    newErrors.email = "Invalid email format.";
   }
   if(!formData.phone.trim()){
    newErrors.phone = "Phone number is required.";
   }
   else if(!/^\d{10}$/.test(formData.phone)){
    newErrors.phone = "Phone number must be 10 digits.";
   }
   if (!formData.message.trim()) newErrors.message = "Message is required."
   return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   const validationErrors = validate();
   if(Object.keys(validationErrors).length>0){
    setErros(validationErrors)
    return;
   }
   try {
    const reponse = await axios.post('http://localhost:5000/api/contact', formData);
    setSuccessMessage(reponse.data.message)
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErros({})
   } catch (error) {
    setErros({ submit: 'Failed to send message. Please try again later.' });
   }
  };

  return (
    <section id="contact" className="contact-section bg-light py-5">
    <div className="container">
      <h2 className="section-title text-center text-primary fw-5 mb-5 mx-5">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-sm">
            
            {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
            {errors.submit && <div className="alert alert-danger text-center">{errors.submit}</div>}

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Contact Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                required
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                rows="4"
                required
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactForm;
