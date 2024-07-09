// src/components/Auth/AuthModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../supabaseClient';
import './AuthModal.css';

Modal.setAppElement('#root');

const AuthModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      await supabase.auth.signUp({ email, password });
    } else {
      await supabase.auth.signInWithPassword({ email, password });
    }
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Auth Modal" className="auth-modal">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </Modal>
  );
};

export default AuthModal;
