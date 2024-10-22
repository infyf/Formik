import React from 'react';
import RegistrationForm from './lr8/RegistrationForm';
import AddProductForm from './lr8/AddProductForm';
import CommentForm from './lr8/CommentForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Форми з використанням Formik</h1>
      <h2>Форма реєстрації</h2>
      <RegistrationForm />
      
      <h2>Форма додавання товару</h2>
      <AddProductForm />
      
      <h2>Форма додавання коментаря</h2>
      <CommentForm />
    </div>
  );
}

export default App;
