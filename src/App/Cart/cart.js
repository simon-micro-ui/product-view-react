import React from 'react';
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        console.log("First Product=" + this.products[0]);
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
    }

    addToCart(product) {
        console.log("buying " + product.productname);
        if (product.qty === product.available) {
            console.log("Product is out of Stock.");
        } else {
            this.product.qty = this.product.qty + 1;
            const productcartele = document.querySelector("product-cart");
            if (productcartele != null) {
                productcartele["message"] = product;
            }
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