import React from 'react';
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cart extends React.Component {
    render() {
        return (
            <div id="cart" className={`col-sm-7`}>
                <div className={`panel panel-primary`}>
                    <div className={`panel-heading`}>Product List</div>
                    <div className={`panel-body fixed-panel`}>
                        <div className={`table-responsive`}>
                            <table className={`table`}>
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
                                <tr>
                                    <td>product.productname</td>
                                    <td>product.code</td>
                                    <td>product.price</td>
                                    <td>product.available</td>
                                    <td>
                                        <a className={`btn btn-primary`}>Add</a>
                                    </td>
                                </tr>
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
