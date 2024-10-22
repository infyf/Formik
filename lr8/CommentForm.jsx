import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const commentSchema = Yup.object({
  comment: Yup.string().required('Коментар не може бути порожнім'),
});

function CommentForm() {
  return (
    <Formik
      initialValues={{ comment: '' }}
      validationSchema={commentSchema}
      onSubmit={(values, { resetForm }) => {
        alert(`Коментар: ${values.comment} успішно додано!`); 
        resetForm(); 
      }}
    >
      <Form>
        <div>
          <label>Коментар:</label>
          <Field name="comment" as="textarea" />
          <ErrorMessage name="comment" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Додати коментар</button>
      </Form>
    </Formik>
  );
}

export default CommentForm;
