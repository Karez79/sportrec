import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../components/supabaseClient';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onRequestClose }) => {
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
        localStorage.setItem('user', JSON.stringify(user));
        setError('');
        onRequestClose();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('Unexpected error occurred. Please try again.');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  };

  const handleEscapePress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onRequestClose();
    }
  }, [onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapePress);
    } else {
      document.removeEventListener('keydown', handleEscapePress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen, handleEscapePress]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal__content">
          <button className="modal__close" onClick={onRequestClose}>×</button>
          <h2 className="modal__title">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          <form className="modal__form" onSubmit={handleAuth}>
            <input
              type="email"
              className="modal__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <input
              type="password"
              className="modal__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button className="modal__button" type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </form>
          {error && <p className="error">{error}</p>}
          <button className="modal__button" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
