import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import NumberProvider from './components/NumberProvider';
import NumberContext from './contexts/NumberContext';

import { CartProvider } from "./contexts/Cart";

const Index = () => <h2>Home</h2>

function App() {
    return (
        <CartProvider>
        <Router>
            <div className="top-menu">
                <TopMenu/>
            </div>
            <div className="App">
                {/*<NumberContext.Consumer>*/}
                {/*    {(context) => <h2>{context}</h2>}*/}
                {/*</NumberContext.Consumer>*/}
            </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products/">Products</Link>
                    </li>
                    <li>
                        <Link to="/products/">Cart ()</Link>
                    </li>
                </ul>
                <div className="App">
                    <Route path="/" exact component={Index}></Route>
                    {/*<Route path="/products/" component={Products}></Route>*/}
                </div>

            </Router>
        </CartProvider>
    );
}

export default App;
