import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {
  
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart;

  return (
    <BrowserRouter> 
     <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            E-commerce
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/product/:id" component={ProductPage}></Route>
        <Route path="/" component={HomePage} exact></Route>
      
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
