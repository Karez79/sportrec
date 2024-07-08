import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import './Auth.css';
const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const handleAuth = async () => {
        let response;
        if (isLogin) {
            response = await supabase.auth.signIn({ email, password });
        }
        else {
            response = await supabase.auth.signUp({ email, password });
        }
        if (response.error) {
            setError(response.error.message);
        }
        else {
            setError('');
        }
    };
    return (_jsxs("div", { className: "auth-container", children: [_jsx("h2", { children: isLogin ? 'Login' : 'Sign Up' }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { onClick: handleAuth, children: isLogin ? 'Login' : 'Sign Up' }), error && _jsx("p", { children: error }), _jsx("button", { onClick: () => setIsLogin(!isLogin), children: isLogin ? 'Need to sign up?' : 'Already have an account?' })] }));
};
export default Auth;
