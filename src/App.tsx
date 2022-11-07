import React, { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { LoginButton } from './components/LoginButton';
import Modal from './components/Modal';
import LoginForm from './components/LoginForm';
import './App.css';
import RegisterForm from './components/RegisterForm';

function App() {
  const navigate = useNavigate();

  return (
        <div className="App">
          <Routes>
            <Route path="/login-form/login" element={(
              <Modal onClose={() => navigate('/login-form')}>
                <LoginForm />
              </Modal>
            )}/>
            <Route path="/login-form/register" element={(
              <Modal onClose={() => navigate('/login-form')}>
                <RegisterForm />
              </Modal>
            )}/>
            <Route path="/login-form" element={(
              <LoginButton onClick={() => navigate('/login-form/login')}/>
            )}/>
          </Routes>
        </div>
  );
}

export default App;
