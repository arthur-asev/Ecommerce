import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressPage(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { ShippingAddress } = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(ShippingAddress.fullName);
  const [address, setAddress] = useState(ShippingAddress.address);
  const [city, setCity] = useState(ShippingAddress.city);
  const [postalCode, setPostalCode] = useState(ShippingAddress.postalCode);
  const [country, setCountry] = useState(ShippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Endereço de entrega</h1>
        </div>
        <div>
          <label htmlFor="fullname">Nome completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Escreva seu nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="adress">Endereço</label>
          <input
            type="text"
            id="adress"
            placeholder="Escreva seu Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalcode">Código Postal</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Escreva seu Código postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Local</label>
          <input
            type="text"
            id="country"
            placeholder="Escreva seu local"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label></label>
          <button className="primary" type="submit">
            Contunuar
          </button>
        </div>
      </form>
    </div>
  );
}
