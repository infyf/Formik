import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const productSchema = Yup.object({
  productName: Yup.string().required('Обов’язкове поле'),
  price: Yup.number().min(1, 'Ціна повинна бути більше або дорівнювати 1').required('Обов’язкове поле'),
  quantity: Yup.number().min(1, 'Мінімум 1 одиниця товару').max(100, 'Максимум 100 одиниць товару').required('Обов’язкове поле'),
});

function AddProductForm() {
  return (
    <Formik
      initialValues={{ productName: '', price: '', quantity: '' }}
      validationSchema={productSchema}
      onSubmit={(values, { resetForm }) => {
        alert(`Товар: ${values.productName}, Ціна: ${values.price}, Кількість: ${values.quantity} успішно додано!`); // Виводимо дані товару
        resetForm(); 
      }}
    >
      <Form>
        <div>
          <label>Назва товару:</label>
          <Field name="productName" />
          <ErrorMessage name="productName" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label>Ціна:</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label>Кількість:</label>
          <Field name="quantity" type="number" />
          <ErrorMessage name="quantity" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Додати товар</button>
      </Form>
    </Formik>
  );
}

export default AddProductForm;
