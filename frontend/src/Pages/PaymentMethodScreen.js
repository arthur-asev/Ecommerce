import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen() {
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
