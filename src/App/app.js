import React, { Component } from 'react';
import ProductView from './ProductView/product-view';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.products = [
            {
                productname: "JBL Flip 4",
                code: "cat1-0001",
                price: 18.01,
                cartprice: 0,
                available: 10,
                qty: 0
            },
            {
                productname: "Bose Sound Link",
                code: "cat1-0010",
                price: 129.05,
                cartprice: 0,
                available: 9,
                qty: 0
            },
            {
                productname: "AB Portable",
                code: "cat1-0008",
                price: 19.78,
                cartprice: 0,
                available: 11,
                qty: 0
            },
            {
                productname: "AE-9 Portable",
                code: "cat1-0011",
                price: 299.99,
                cartprice: 0,
                available: 8,
                qty: 0
            },
            {
                productname: "JBL Pulse 3",
                code: "cat1-0009",
                price: 23.05,
                cartprice: 0,
                available: 10,
                qty: 0
            }
        ];
    }

    render() {
        return (
            <div id="appRoot">
                <ProductView products={this.products} />
            </div>
        );
    }
}
export default App;