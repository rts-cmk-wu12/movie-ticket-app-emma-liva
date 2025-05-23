import { useState } from "react";
import { useNavigate } from "react-router";
import FetchMongo from "./fetchMongo";

function SignUp({ setActivePage }) {
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    async function validateForm(e) {
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const repeatPassword = form.repeatPassword.value;

        const newErrors = {};

        const availableUsername = users.some(user => user?.username !== username);
        const availableEmail = users.some(user => user?.email !== email);

        if (username.length < 2) {
            newErrors.username = 'Username must be at least 2 characters.';
        }

        if (!availableUsername) {
            newErrors.username = 'Username already exists.';
        }

        if (!email.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email address';
        }

        if (!availableEmail) {
            newErrors.email = 'Email already exists.';
        }

        if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.';
        }

        if (repeatPassword !== password) {
            newErrors.repeatPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/user/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, email }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('user', data.userId);
                navigate('/');
            }
        }
    }

    return (
        <>
            <FetchMongo
                fetchUrl='/api/users'
                setData={setUsers}
            />
            <h2 className="profile-main__heading">signup</h2>
            <form className="select-seats" onSubmit={validateForm}>
                <div className="select-seats__cinema">
                    <label htmlFor="username" className="select-seats__label">Your Username</label>
                    <input type="text" name="username" id="username" className="select-seats__select" placeholder="Example Username" />
                    {errors.username && (
                        <p className="select-seats__select--error">{errors.username}</p>
                    )}
                </div>
                <div className="select-seats__cinema">
                    <label htmlFor="email" className="select-seats__label">Your Email</label>
                    <input type="email" name="email" id="email" className="select-seats__select" placeholder="example@email.com" />
                    {errors.email && (
                        <p className="select-seats__select--error">{errors.email}</p>
                    )}
                </div>
                <div className="select-seats__cinema">
                    <label htmlFor="password" className="select-seats__label">Your Password</label>
                    <input type="password" name="password" id="password" className="select-seats__select" placeholder="****************" />
                    {errors.password && (
                        <p className="select-seats__select--error">{errors.password}</p>
                    )}
                </div>
                <div className="select-seats__cinema">
                    <label htmlFor="repeatPassword" className="select-seats__label">Repeat Your Password</label>
                    <input type="password" name="repeatPassword" id="repeatPassword" className="select-seats__select" placeholder="****************" />
                    {errors.repeatPassword && (
                        <p className="select-seats__select--error">{errors.repeatPassword}</p>
                    )}
                </div>
                <button type="submit" className="checkout__btn">Signup</button>
            </form>
            <p className="login__sign-up">Already have an account? <span className="login__sign-up--link" onClick={() => setActivePage('login')}>Login</span></p>
        </>
    );
}

export default SignUp;