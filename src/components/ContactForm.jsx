// components/ContactForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Show success alert
    alert('Your submission was successful! You will be contacted immediately.');

    // Reset the form after successful submission
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
