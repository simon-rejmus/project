import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && message.trim() !== "");
  }, [name, email, message]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameBlur = () => {
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageBlur = () => {
    if (message.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setNameError("Name is required");
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
    }
    if (message.trim() === "") {
      setMessageError("Message is required");
    }

    if (isFormValid) {
      emailjs.sendForm('service_adv8n5s', 'template_omzofjh', form.current, 'yA_d0b9l8-Vz5BQ5o')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setSent(true);
    }
  };

  return (
    <div className='contact'>
      {!sent ? (
        <div>
          <h1>Contact form</h1>
          <form ref={form} onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                pattern=".*\S+.*"
                title='Write your name'
                required/>
              {nameError && <span className="validation-message">{nameError}</span>}
            </div>
            <div className='contact-2'>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                pattern=".*\S+.*"
                title='Write your email'
                required/>
              {emailError && <span className="validation-message">{emailError}</span>}
            </div>
            <div className='contact-3'>
              <label>Message:</label>
              <textarea
                name="message"
                value={message}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                pattern=".*\S+.*"
                title='Write your message'
                required/>
              {messageError && <span className="validation-message">{messageError}</span>}
            </div>
            <button
              type="submit"
              className={isFormValid ? "" : "inactive-btn"}
              disabled={!isFormValid}>
                Submit
            </button>
          </form>
        </div>
      ) : (
        <div className='form-sent'>
          <h1>Form sent successfully</h1>
          <p>Thank you for the message {name}. I will reach out to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
