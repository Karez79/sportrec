// src/components/Auth/Auth.tsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import './Auth.css';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleAuth = async () => {
    let response;
    if (isLogin) {
      response = await supabase.auth.signInWithPassword({ email, password });
    } else {
      response = await supabase.auth.signUp({ email, password });
    }
    if (response.error) {
      setError(response.error.message);
    } else {
      setError('');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
      {error && <p>{error}</p>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to sign up?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default Auth;
