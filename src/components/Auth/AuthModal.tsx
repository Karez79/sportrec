import React, { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../supabaseClient';
import './AuthModal.css';

Modal.setAppElement('#root');

const AuthModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;
      if (isSignUp) {
        console.log('Trying to sign up with:', { email, password });
        response = await supabase.auth.signUp({ email, password });
      } else {
        console.log('Trying to sign in with:', { email, password });
        response = await supabase.auth.signInWithPassword({ email, password });
      }
      console.log('Response:', response);
      if (response.error) {
        setError(response.error.message);
        console.error('Error during authentication:', response.error.message);
      } else {
        const user = response.data.user;
        console.log('User authenticated:', user);
        setError('');
        onRequestClose();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('Unexpected error occurred. Please try again.');
    }
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
      {error && <p className="error">{error}</p>}
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </Modal>
  );
};

export default AuthModal;
