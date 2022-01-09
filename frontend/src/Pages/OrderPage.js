import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function OrderPage(props) {
  const dispatch = useDispatch();
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Nome: </strong>
                  {order.shippingAddress.fullName} <br />
                  <strong>Endereço: </strong>
                  {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">Entregues em:</MessageBox>
                ) : (
                  <MessageBox variant="danger">Não entregue:</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Método de pagamento:</strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">Pago em:</MessageBox>
                ) : (
                  <MessageBox variant="danger">Não pago:</MessageBox>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className=" card card-body">
            <ul>
              {" "}
              <li>
                <h2>Sumario dos Produtos</h2>
              </li>
              <li>
                <div className="row">
                  {" "}
                  <div>Itens</div>
                  <div>R$: {order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  {" "}
                  <div>Taxa</div>
                  <div>R$: {order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  {" "}
                  <div>Transporte</div>
                  <div>R$: {order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  {" "}
                  <div>
                    <strong>Preço total : </strong>
                  </div>
                  <div>
                    <strong>R$: {order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
