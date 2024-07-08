import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../supabaseClient';
import './AuthModal.css';
Modal.setAppElement('#root');
const AuthModal = ({ isOpen, onRequestClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [isRequestInProgress, setIsRequestInProgress] = useState(false);
    const handleAuth = async () => {
        if (isRequestInProgress)
            return;
        setIsRequestInProgress(true);
        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) {
                    alert('Error logging in');
                }
                else {
                    await sendVerificationCode();
                }
            }
            else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) {
                    alert('Error signing up');
                }
                else {
                    await sendVerificationCode();
                }
            }
        }
        catch (error) {
            console.error('Error during auth:', error);
            alert('An error occurred. Please try again later.');
        }
        finally {
            setIsRequestInProgress(false);
        }
    };
    const sendVerificationCode = async () => {
        if (isRequestInProgress)
            return;
        setIsRequestInProgress(true);
        try {
            const { error } = await supabase.auth.signInWithOtp({ email });
            if (error) {
                alert('Error sending verification code');
            }
            else {
                setIsCodeSent(true);
            }
        }
        catch (error) {
            console.error('Error sending verification code:', error);
            alert('An error occurred. Please try again later.');
        }
        finally {
            setIsRequestInProgress(false);
        }
    };
    const verifyCode = async () => {
        if (isRequestInProgress)
            return;
        setIsRequestInProgress(true);
        try {
            const { error } = await supabase.auth.verifyOTP({ email, token: verificationCode, type: 'email' });
            if (error) {
                alert('Error verifying code');
            }
            else {
                onRequestClose();
            }
        }
        catch (error) {
            console.error('Error verifying code:', error);
            alert('An error occurred. Please try again later.');
        }
        finally {
            setIsRequestInProgress(false);
        }
    };
    return (_jsxs(Modal, { isOpen: isOpen, onRequestClose: onRequestClose, contentLabel: "Auth Modal", className: "auth-modal", overlayClassName: "auth-modal-overlay", children: [_jsx("h2", { children: isLogin ? 'Login' : 'Sign Up' }), !isCodeSent ? (_jsxs(_Fragment, { children: [_jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { onClick: handleAuth, disabled: isRequestInProgress, children: isLogin ? 'Login' : 'Sign Up' }), _jsx("p", { onClick: () => setIsLogin(!isLogin), children: isLogin ? 'Need to sign up?' : 'Already have an account?' })] })) : (_jsxs(_Fragment, { children: [_jsx("p", { children: "Enter the code sent to your email" }), _jsx("input", { type: "text", placeholder: "Verification Code", value: verificationCode, onChange: (e) => setVerificationCode(e.target.value) }), _jsx("button", { onClick: verifyCode, disabled: isRequestInProgress, children: "Verify Code" })] })), _jsx("button", { onClick: onRequestClose, children: "Close" })] }));
};
export default AuthModal;
