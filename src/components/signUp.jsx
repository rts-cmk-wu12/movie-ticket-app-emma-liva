import { useState } from "react";

function SignUp() {
     const [errors, setErrors] = useState({});
    function validateForm(e) {
        e.preventDefault();

        const form = e.target;
        const newErrors = {};

        if (!form.email.value.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email address';
        }

        if (form.username.value.length < 2) {
            newErrors.username = 'Username must be at least 2 characters.';
        }

        if (form.password.value.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.';
        }
        if (form.repeatPassword.value !== form.password.value) {
            newErrors.repeatPassword = 'Passwords do not match.';
        }


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        }
    }

    return (  
        <>
            <form className="select-seats" onSubmit={validateForm}>
                    <div className="select-seats__cinema">
                        <label htmlFor="email" className="select-seats__label">Your Email</label>
                        <input type="email" name="email" id="email" className="select-seats__select" placeholder="example@email.com" />
                        {errors.email && (
                            <p className="select-seats__select--error">{errors.email}</p>
                        )}
                    </div>
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
                    <div className="select-seats__cinema">
                        <label htmlFor="repeatPassword" className="select-seats__label">Repeat Your Password</label>
                        <input type="repeatPassword" name="repeatPassword" id="repeatPassword" className="select-seats__select" placeholder="Your repeatPassword" />
                        {errors.repeatPassword && (
                            <p className="select-seats__select--error">{errors.repeatPassword}</p>
                        )}
                    </div>
                    
                   
                    
                    
                    <button type="submit" className="checkout__btn">Sign Up</button>
                </form>

        </>
    );
}

export default SignUp;