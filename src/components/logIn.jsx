import { useState } from "react";
import { useNavigate } from "react-router";
import SignUp from "./signUp";

function LogIn() {
    const [error, setError] = useState(false);
    const [activePage, setActivePage] = useState('login');

    const navigate = useNavigate();

    async function validateForm(e) {
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;

        const response = await fetch(`${import.meta.env.VITE_URL}/api/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', data.userId);
            setError(false);
            navigate('/');
        } else {
            setError(true);
        }
    }

    return (
        <>
            {activePage === 'login' ? (
                <>
                    <h2 className="profile-main__heading">login</h2>
                    <form className="select-seats" onSubmit={validateForm}>
                        <div className="select-seats__cinema">
                            <label htmlFor="username" className="select-seats__label">Your Username</label>
                            <input type="text" name="username" id="username" className="select-seats__select" placeholder="Your name" />
                        </div>
                        <div className="select-seats__cinema">
                            <label htmlFor="password" className="select-seats__label">Your Password</label>
                            <input type="password" name="password" id="password" className="select-seats__select" placeholder="Your password" />
                        </div>
                        {error && (
                            <p className="select-seats__select--error login-message">Profile not found.<br />Incorrect username or password.</p>
                        )}
                        <button type="submit" className="checkout__btn">Login</button>
                    </form>
                    <p className="login__sign-up">Don't have an account? <span className="login__sign-up--link" onClick={() => setActivePage('signup')}>Signup</span></p>
                </>
            ) : <SignUp setActivePage={setActivePage} />}
        </>
    );
}

export default LogIn;