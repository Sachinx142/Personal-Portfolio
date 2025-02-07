const Contact = require("../models/Contact")

const submitContactForm  = async (req,res) => {
   try {
    const newContact= new Contact(req.body)
    await newContact.save();
    res.status(201).json({ message: '✅ Message sent successfully!' });
   } catch (error) {
    res.status(500).json({ message: '❌ Server error. Please try again.' });
   }
}

module.exports = {submitContactForm}