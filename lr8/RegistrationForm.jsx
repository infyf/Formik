import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';

const registrationSchema = Yup.object({
  firstName: Yup.string().min(3, 'Ім’я повинно містити мінімум 3 символи').required('Обов’язкове поле'),
  lastName: Yup.string().max(10, 'Прізвище не повинно містити більше 10 символів').required('Обов’язкове поле'),
  email: Yup.string().email('Невірна електронна пошта').required('Обов’язкове поле'),
  password: Yup.string().min(6, 'Мінімум 6 символів').matches(/[A-Z]/, 'Пароль повинен містити хоча б одну велику літеру').matches(/[^a-zA-Z0-9]/, 'Пароль повинен містити хоча б один спеціальний символ').required('Обов’язкове поле'),
  studentId: Yup.string()
    .matches(/^\d{8}$/, 'Номер заліковки повинен складатися з 8 цифр')
    .required('Обов’язкове поле'),
});

function RegistrationForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', studentId: '' }}
      validationSchema={registrationSchema}
      onSubmit={(values, { resetForm }) => {
        alert(`Користувач ${values.lastName} з номером заліковки ${values.studentId} успішно зареєстрований!`);
        resetForm();
      }}
    >
      <Form>
        <div>
          <label>Ім'я:</label>
          <Field name="firstName" component={CustomInput} />
        </div>
        <div>
          <label>Прізвище:</label>
          <Field name="lastName" component={CustomInput} />
        </div>
        <div>
          <label>Електронна пошта:</label>
          <Field name="email" type="email" component={CustomInput} />
        </div>
        <div>
          <label>Пароль:</label>
          <Field name="password" type="password" component={CustomInput} />
        </div>
        <div>
          <label>Номер заліковки:</label>
          <Field name="studentId" component={CustomInput} />
        </div>
        <button type="submit">Зареєструватися</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
