import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../src/Component/style.css"
toast.configure();

export default function App() {
  async function handleToken(token, addresses) {
    const response = await axios.post(
      { token}
    );
	console.log("Payment Done!!")
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_51KfqVnB32MK4W6iDNeUGfW19fJfk9CJlJiDQomtCNsiCK8KDVybPyyLqhKqHBUO70jrG1pzQFXaWdMLhV6PKGXHE00umfgiErO"
        token={handleToken}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
