import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <BrowserRouter> 
     <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            E-commerce
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
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
