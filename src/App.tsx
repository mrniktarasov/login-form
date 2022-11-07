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
            <Route path="/login" element={(
              <Modal onClose={() => navigate('/')}>
                <LoginForm />
              </Modal>
            )}/>
            <Route path="/register" element={(
              <Modal onClose={() => navigate('/')}>
                <RegisterForm />
              </Modal>
            )}/>
            <Route path="/" element={(
              <LoginButton onClick={() => navigate('/login')}/>
            )}/>
          </Routes>
        </div>
  );
}

export default App;
