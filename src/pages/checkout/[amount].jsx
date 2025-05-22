import { useState } from "react";
import { useParams } from "react-router";
import { RiShieldCheckFill } from "react-icons/ri";
import Header from "../../components/header";
import Popup from "../../components/popup";

function CheckoutPage() {
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const { amount } = useParams();
    const pricePerSeat = 49;
    const totalPrice = pricePerSeat * amount;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear().toString().slice(-2);


    function validateForm(e) {
        e.preventDefault();

        const form = e.target;
        const newErrors = {};

        const splittedDate = form.date.value.split('/');
        const month = parseInt(splittedDate[0]);
        const year = parseInt(splittedDate[1]);

        const isValidDate = month >= 1 && month <= 12 && year >= 0 && year <= 99;
        const isValidDateFormat = form.date.value.match(/^\d{2}\/\d{2}$/);
        const isValidDateRange = (year > currentYear) || (year === currentYear && month >= currentMonth);

        if (!form.email.value.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email address';
        }

        if (form.cardholder.value.length < 2) {
            newErrors.cardholder = 'Cardholder name must be at least 2 characters.';
        }

        if (!isNaN(form.cardholder.value)) {
            newErrors.cardholder = 'Cardholder name cannot include numeric characters.';
        }

        if (form.cardnumber.value.length !== 16) {
            newErrors.cardnumber = 'Card number must be 16 digits.';
        }

        if (isNaN(form.cardnumber.value)) {
            newErrors.cardnumber = 'Card number cannot include non-numeric characters.';
        }

        if (!isValidDate || !isValidDateFormat || !isValidDateRange) {
            newErrors.date = 'Invalid date. Please use mm/yy format and ensure the date is not in the past.';
        }

        if (form.cvv.value.length !== 3) {
            newErrors.cvv = 'CVV must be 3 digits.';
        }

        if (isNaN(form.cvv.value)) {
            newErrors.cvv = 'CVV cannot include non-numeric characters.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setShowPopup(true);
        }
    }

    return (
        <>
            <Header title='checkout' />
            <main className="checkout">
                <h2 className="checkout__heading">payment method</h2>
                <img src="/mastercard.png" alt="mastercard" className="checkout__card" />
                <h2 className="checkout__heading">payment details</h2>
                <form className="select-seats" onSubmit={validateForm}>
                    <div className="select-seats__cinema">
                        <label htmlFor="email" className="select-seats__label">Your Email</label>
                        <input type="email" name="email" id="email" className="select-seats__select" placeholder="example@email.com" />
                        {errors.email && (
                            <p className="select-seats__select--error">{errors.email}</p>
                        )}
                    </div>
                    <div className="select-seats__cinema">
                        <label htmlFor="cardholder" className="select-seats__label">Cardholder Name</label>
                        <input type="text" name="cardholder" id="cardholder" className="select-seats__select" placeholder="Your name" />
                        {errors.cardholder && (
                            <p className="select-seats__select--error">{errors.cardholder}</p>
                        )}
                    </div>
                    <div className="select-seats__cinema">
                        <label htmlFor="cardnumber" className="select-seats__label">Card Number</label>
                        <input type="number" name="cardnumber" id="cardnumber" className="select-seats__select" placeholder="**** **** **** 51446" />
                        {errors.cardnumber && (
                            <p className="select-seats__select--error">{errors.cardnumber}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="date" className="select-seats__label">Date</label>
                        <input type="text" name="date" id="date" className="select-seats__select" placeholder="mm/yy" />
                        {errors.date && (
                            <p className="select-seats__select--error">{errors.date}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="cvv" className="select-seats__label">CVV</label>
                        <input type="number" name="cvv" id="cvv" className="select-seats__select" placeholder="123" />
                        {errors.cvv && (
                            <p className="select-seats__select--error">{errors.cvv}</p>
                        )}
                    </div>
                    <button type="submit" className="checkout__btn">pay now <span className="checkout__btn--money">${totalPrice}</span></button>
                </form>
                <Popup
                    title='Your payment was successful'
                    description='Refund will only be given if the ticket is cancelled 1 hour before the movie starts.'
                    buttonText='See E-Ticket'
                    link='/'
                    icon={<RiShieldCheckFill />}
                    show={showPopup}
                />
            </main>
        </>
    );
}

export default CheckoutPage;