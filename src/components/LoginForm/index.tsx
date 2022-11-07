import { FunctionComponentElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginInput from "../LoginInput";
import { getHash } from "../modules/get-hash";
import './index.scss';

export default function LoginForm(): FunctionComponentElement<void> {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        debugger
        if(!email) {
            setError('Email is not provided');
            return;
        }

        if(!password) {
            setError('Password is not provided');
            return;
        }

        const hash = getHash(email, password);
        if(localStorage.getItem(hash)) {
            setSuccess('You are sucessfully logged in');
            setError(null);
            setTimeout(() => navigate('/login-form'), 5000);
        } else {
            setError('Invalid email or password');
        }
    }

    const isLoginDisabled = !password && !email;

    return (
        <div className="loginForm_container">
            <div className="loginForm_login">Login</div>
            <span className="loginForm_success">{success}</span>
            <LoginInput
                type="email"
                pattern=".+@globex\.com"
                label="Email"
                size={30}
                required
                onChange={handleEmailChange}
            />
            <LoginInput
                type="password"
                onChange={handlePasswordChange}
                label="Password"
                required
            />
            <span className="loginForm_error">{error}</span>
            <button type="submit" className="button-1"  disabled={isLoginDisabled} onClick={handleSubmit}>Submit</button>
            <Link to='/login-form/register' className='loginForm_pale'>Register</Link>
        </div>
    );
}
