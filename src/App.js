import React from 'react';
import Forms from './components/Form';
import FormikContainer from './components1/FormikContainer';
import LoginForm from './components1/LoginForm';
// import './App.css'
const App = () => {
  return (
    <div>
      <Forms/>
      <FormikContainer/>
      <LoginForm/>
    </div>
  );
};

export default App;