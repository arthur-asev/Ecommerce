import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { signout } from "./actions/userActions";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import PaymentMethodPage from "./Pages/PaymentMethodPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";
import ProductPage from "./Pages/ProductPage";
import RegisterPage from "./Pages/RegisterPage";
import ShippingAddressPage from "./Pages/ShippingAddressPage";
import SigninPage from "./Pages/Signin/SigninPage";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className=" grid-container">
        <div className="nav-mobile">
          <div>
            <Link className="brand" to="/">
              E-commerce
            </Link>
          </div>
          <button>
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <header className="nav-bar row">
          <div>
            <Link className="brand" to="/">
              E-commerce
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Carrinho
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Login</Link>
            )}
          </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/signin" component={SigninPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingAddressPage}></Route>
          <Route path="/payment" component={PaymentMethodPage}></Route>
          <Route path="/placeorder" component={PlaceOrderPage}></Route>
          <Route path="/order/:id" component={OrderPage}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
