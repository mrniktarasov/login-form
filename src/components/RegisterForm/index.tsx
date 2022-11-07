import { FunctionComponentElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginInput from "../LoginInput";
import { getHash } from "../modules/get-hash";
import './index.scss';

export default function RegisterForm(): FunctionComponentElement<void> {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    const [passwordOne, setPasswordOne] = useState<string | null>(null);
    const [passwordTwo, setPasswordTwo] = useState<string | null>(null);

    const [passwordErrorOne, setPasswordErrorOne] = useState<string | null>(null);
    const [passwordErrorTwo, setPasswordErrorTwo] = useState<string | null>(null);

    const[success, setSuccess] = useState<string | null>(null);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const re = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
        if (re.test(event.target.value)) {
            setEmailError(null);
            setEmail(event.target.value);
        } else {
            setEmailError('Email is wrong');
        }
    }

    const handlePasswordChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pass = event.target.value;
        const reg = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");;
        const test = reg.test(pass);
        if (test && pass.length >= 8) {
            setPasswordOne(pass);
            setPasswordErrorOne(null);
        } else if (pass.length === 0) {
            setPasswordErrorOne(null);
        } else {
            setPasswordErrorOne('Password must be at least 8 characters long and contain letters, numbers and special character');
        }
    }

    const handlePasswordChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pass = event.target.value;
        const reg = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");;
        const test = reg.test(pass);
        if (test && pass.length >= 8) {
            setPasswordErrorTwo(null);
            setPasswordTwo(pass);
        } else if (pass.length === 0) {
            setPasswordErrorTwo(null);
        } else {
            setPasswordErrorTwo('Password must be at least 8 characters long and contain letters, numbers and special character');
        }
    }

    const handleSubmit = () => {
        if(!email) {
            setPasswordErrorTwo('Email is empty');
            return;
        }

        if (!passwordOne || !passwordTwo) {
            setPasswordErrorTwo('Passwords are empty');
            return;
        }

        if (passwordOne !== passwordTwo) {
            setPasswordErrorOne(null);
            setPasswordErrorTwo('Passwords do not match');
            return;
        }
        const hash = getHash(email, passwordOne);
        localStorage.setItem(hash, JSON.stringify({
            email,
            password: passwordOne,
        }));
        setSuccess('You are sucessfully registered');
        setTimeout(() => navigate('/login-form'), 5000);
    }

    const isSubmitDisabled: boolean = !email && !passwordOne && !passwordTwo;

    return (
        <div className="registerForm_container">
            <div className="registerForm_login">Login</div>
            <span className="registerForm_success">{success}</span>
            <LoginInput
                type="email"
                pattern=".+@globex\.com"
                label="Email"
                size={30}
                required
                onChange={handleEmailChange}
            />
            <span className="registerForm_error">{emailError}</span>
            <LoginInput
                type="password"
                onChange={handlePasswordChangeOne}
                label="Password"
                required
            />
            <span className="registerForm_error">{passwordErrorOne}</span>
            <LoginInput
                type="password"
                onChange={handlePasswordChangeTwo}
                label="Repeat password"
                required
            />
            <span className="registerForm_error">{passwordErrorTwo}</span>
            <button type="submit" className="button-1" onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
            <Link to='/login-form/login' className='registerForm_pale'>Login</Link>
        </div>
    );
}
