import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div>
      <h1>Contact form</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
};

export default Contact;
