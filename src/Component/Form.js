import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import '../Styles/checkout.css';
import img from "../Assert/img.gif";


const stripePromise = loadStripe("pk_test_51KfqVnB32MK4W6iDNeUGfW19fJfk9CJlJiDQomtCNsiCK8KDVybPyyLqhKqHBUO70jrG1pzQFXaWdMLhV6PKGXHE00umfgiErO");

const IndexPage = () => {
    const [stripeError, setStripeError] = useState();
    const [loading, setLoading] = useState();

    const handleClick = async () => {
        setLoading(true);

        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1Kh45iB32MK4W6iDGCLLkUqV",
                    quantity: 1,
                },
            ],
            mode: "payment",
            cancelUrl: window.location.origin,
            successUrl: window.location.origin,
            customerEmail: "12@gmail.com",
        });

        if (error) {
            setLoading(false);
            setStripeError(error);
        }
    };

    return (
        <>
            {stripeError && <p style={{ color: "red" }}> {stripeError}</p>}

            <button role="link" onClick={handleClick} disabled={loading}>
                Go to Checkout
            </button> <br></br> <br></br>
            <img src={img} alt="Payment Gif"/>
        </>
    )
}

export default IndexPage; 