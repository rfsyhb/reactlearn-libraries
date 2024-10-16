import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PageFormatter from './common/PageFormatter';

export default function Homepage() {
  // State to track if the form has been successfully submitted
  const [submitted, setSubmitted] = useState(false);

  // Yup validation schema for form input validation
  const validationSchema = Yup.object({
    textInput: Yup.string()
      .required('Required') // Field must not be empty
      .max(50, 'Must be 50 characters or less') // Maximum length of 50 characters
      .matches(/^[^0-9]*$/, 'Must be a string, not a number'), // Input must not contain numbers
    numberInput: Yup.number()
      .required('Required') // Field must not be empty
      .min(1, 'Must be at least 1') // Minimum value of 1
      .max(100, 'Must be 100 or less'), // Maximum value of 100
  });

  return (
    <PageFormatter>
      <h1 className="text-2xl">Re-learn ReactJS</h1>
      <Formik
        // Initial values for the form fields
        initialValues={{ textInput: '', numberInput: '' }}
        // Validation schema for the form
        validationSchema={validationSchema}
        // Function to handle form submission
        onSubmit={(values, { resetForm, setSubmitting }) => {
          // Display form values in an alert
          alert(JSON.stringify(values, null, 2));
          // Set submitted state to true to indicate successful submission
          setSubmitted(true);
          // Reset the form fields
          resetForm();
          // Set submitting state to false after submission
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <h2>Controlled input</h2>
              <div className="flex flex-col">
                {/* Field component to handle text input, linked to Formik's state */}
                <Field
                  type="text"
                  name="textInput"
                  placeholder="any text"
                  className="text-bg"
                />
                {/* ErrorMessage component to display validation errors for the textInput field */}
                <ErrorMessage
                  name="textInput"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <h2>Number input</h2>
              <div className="flex flex-col">
                {/* Field component to handle number input, linked to Formik's state */}
                <Field
                  type="number"
                  name="numberInput"
                  placeholder="any number"
                  className="text-bg"
                />
                {/* ErrorMessage component to display validation errors for the numberInput field */}
                <ErrorMessage
                  name="numberInput"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            {/* Submit button for the form, disabled while submitting */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-2 rounded-sm border-transparent hover:border-red-500"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {/* Display success message if the form has been successfully submitted */}
            {submitted && (
              <div className="text-green-500">
                Form has been successfully submitted!
              </div>
            )}
          </Form>
        )}
      </Formik>
    </PageFormatter>
  );
}
