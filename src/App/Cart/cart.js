import React from 'react';
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        console.log("First Product=" + this.products[0]);
    }

    componentDidMount() {
        console.log('>>> componentDidMount');

        // Listen for the event.
        document.addEventListener('product/bought',
            function (ev) {
                console.log("Event received : product=" + JSON.stringify(ev.detail));
            }, false);

        console.log('<<< componentDidMount');
    }

    componentWillUnmount() {
        console.log('>>> componentWillUnmount <<<');
    }

    render() {
        return (
            <div className="col-sm-7">
                <div className="panel panel-primary">
                    <div className="panel-heading">Product List</div>
                    <div className="panel-body fixed-panel">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Code</th>
                                    <th>Price</th>
                                    <th>Available</th>
                                    <th />
                                </tr>
                                </thead>
                                <tbody>
                                {this.products.map(function(product, index) {
                                    console.log("productname=" + product.productname);
                                    return <ProductItem product={product} index={index} />;
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cart;

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("product=" + props.product.productname);
        console.log("index2=" + props.index);
        this.product = props.product;
        this.index = props.index;

        this.state = props.product;
    }

    addToCart(product) {
        console.log("buying " + product.productname);
        if (product.available <= 0) {
            let message = "Product is out of Stock.";
            console.log(message);
            alert(message);
        } else {
            this.product.qty = this.product.qty + 1;
            this.product.available = this.product.available - 1;
            console.log("Product quantity : bought=" + this.product.qty + ", remaining=" + this.product.available);
            this.setState(this.product);

            var event = new CustomEvent('product/bought', { detail: this.product });
            document.dispatchEvent(event);
            console.log("Event dispatched ok...");
            //const productcartele = document.querySelector("product-cart");
            //if (productcartele != null) {
            //    productcartele["message"] = product;
            //}
        }
    }

    render() {
        return (
            <tr>
                <td>{this.product.productname}</td>
                <td>{this.product.code}</td>
                <td>{this.product.price}</td>
                <td>{this.product.available}</td>
                <td>
                    <a
                        className="btn btn-primary"
                        onClick={() => this.addToCart(this.product)}
                    >
                        Add
                    </a>
                </td>
            </tr>
        );
    }
}