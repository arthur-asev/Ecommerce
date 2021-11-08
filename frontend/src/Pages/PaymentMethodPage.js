import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodPage(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step3 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Pagamento</h1>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            value-="PayPal"
            name="paymenteMethod"
            required
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div>
          <input
            type="radio"
            id="stripe"
            value-="Stripe"
            name="paymenteMethod"
            required
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor="stripe">Stripe</label>
        </div>

        <div>
          <input
            type="radio"
            id="pix"
            value-="Pix"
            name="paymenteMethod"
            required
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></input>
          <label htmlFor="pix">Pix</label>

          <div>
            <button className="primary" type="submit">
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
