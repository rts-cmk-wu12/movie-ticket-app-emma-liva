import { useState } from "react";

function LogIn() {
    const [errors, setErrors] = useState({});
    function validateForm(e) {
        e.preventDefault();

        const form = e.target;
        const newErrors = {};


        if (form.username.value.length < 2) {
            newErrors.username = 'Username must be at least 2 characters.';
        }

        if (form.password.value.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.';
        }


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        }
    }

    return (
        <>
            <form className="select-seats" onSubmit={validateForm}>
                <div className="select-seats__cinema">
                    <label htmlFor="username" className="select-seats__label">Your Username</label>
                    <input type="text" name="username" id="username" className="select-seats__select" placeholder="Your name" />
                    {errors.username && (
                        <p className="select-seats__select--error">{errors.username}</p>
                    )}
                </div>
                <div className="select-seats__cinema">
                    <label htmlFor="password" className="select-seats__label">Your Password</label>
                    <input type="password" name="password" id="password" className="select-seats__select" placeholder="Your password" />
                    {errors.password && (
                        <p className="select-seats__select--error">{errors.password}</p>
                    )}
                </div>
                <button type="submit" className="checkout__btn">Log In</button>
            </form>
            <p className="login__sign-up">Don't have an account? <span className="login__sign-up--link">Sign Up</span></p>

        </>
    );
}

export default LogIn;