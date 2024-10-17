import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PageFormatter from '../../components/common/PageFormatter';

export default function FormLearn() {
  const [submitted, _setSubmitted] = useState(false);

  // Yup schema
  const validationSchema = Yup.object({
    nameInput: Yup.string()
      .required('Required')
      .max(20, 'Must be 20 characters or less'),
    descriptionInput: Yup.string()
      .required('Required')
      .max(100, 'Must be 100 characters or less'),
    stockInput: Yup.number()
      .required('Required')
      .min(1, 'Must be at least 1')
      .max(100, 'Must be 100 or less'),
    imageURLInput: Yup.string().url('Must be a valid URL'),
  });

  return (
    <PageFormatter>
      <h1 className="text-2xl">Re-learn ReactJS</h1>
      <Formik
        initialValues={{
          nameInput: '',
          descriptionInput: '',
          stockInput: '',
          imageURLInput: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          _setSubmitted(true);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <h2>Product name</h2>
              <div className="flex flex-col">
                <Field
                  type="text"
                  name="nameInput"
                  placeholder="Name"
                  className="text-bg"
                />
                <ErrorMessage
                  name="nameInput"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <h2>Product description</h2>
              <div className="flex flex-col">
                <Field
                  type="text"
                  name="descriptionInput"
                  placeholder="Description"
                  className="text-bg"
                />
                <ErrorMessage
                  name="descriptionInput"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className='flex flex-row gap-2'>
              <h2>Product stock</h2>
              <div className='flex flex-col'>
                <Field
                  type='number'
                  name='stockInput'
                  placeholder='Stock'
                  className='text-bg'
                />
                <ErrorMessage
                  name='stockInput'
                  component='div'
                  className='text-red-500'
                />
              </div>
            </div>
            <div className='flex flex-row gap-2'>
              <h2>Product imageURL</h2>
              <div className='flex flex-col'>
                <Field
                  type='text'
                  name='imageURLInput'
                  placeholder='Image URL'
                  className='text-bg'
                />
                <ErrorMessage
                  name='imageURLInput'
                  component='div'
                  className='text-red-500'
                />
              </div>
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full border-2 rounded-sm border-transparent hover:border-red-500'
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitted && (
              <div className='text-green-500'>
                Form has been successfully submitted!
              </div>
            )}
          </Form>
        )}
      </Formik>
    </PageFormatter>
  );
}
