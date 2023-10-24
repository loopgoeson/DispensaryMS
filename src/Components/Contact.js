import React, { useState } from 'react';

// Define a CSS style object
const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};
const contactstyle={
   fontFamily:'Young Serif ,serif',
   
};

function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div>
      <h1 className='' style={contactstyle}>Contact Us</h1>
      <p>If you have any questions or feedback, please feel free to reach out to us.</p>
      <p>Email: rungtaraghav43@gmail.com</p>
      <p>Phone: +91-9839522557</p>
      </div>
     

      <h2 className='text-center py-1'>You can also leave your message to us!</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            style={inputStyle}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={inputStyle}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            style={inputStyle}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
