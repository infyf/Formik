import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const initialValues = {
    productName: '',
    price: ''
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Назва товару обов’язкова'),
    price: Yup.number().required('Ціна обов’язкова').positive('Ціна повинна бути позитивною')
  });

  const handleSubmit = (values) => {
    console.log('Товар:', values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>Назва товару</label>
          <Field name="productName" type="text" />
          <ErrorMessage name="productName" component="div" className="error" />
        </div>
        <div>
          <label>Ціна</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" component="div" className="error" />
        </div>
        <button type="submit">Додати товар</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
