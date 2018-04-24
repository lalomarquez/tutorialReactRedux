// Dependencies
import React from 'react'
import { connect } from 'react-redux'
// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';

import { removeItem } from '../actions/actionCreators.js'

const StorageBasket = ({ cart, removeFromCart }) => {
    return (
        <div >
            <h4>Componente ShoppingCart</h4>
            <div className="row col-12">
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Items</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, i) =>
                            <tr key={i}>
                                <th scope="row">{product.name}</th>
                                <td>$ {product.precio}</td>
                                <td><Button color="danger" onClick={() => removeFromCart(i)}>eliminar</Button></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total: ${cart.reduce((sum, product) => sum + product.precio, 0)}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart(i) {
            dispatch(removeItem(i))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StorageBasket)