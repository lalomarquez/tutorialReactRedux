// Dependencies
import React from 'react'
// Assets
import * as FontAwesome from 'react-icons/lib/fa'
// Container
import StorageBasket from '../container/StorageBasket'

class Cart extends React.Component {
    render() {
        return (
            <div>
                <div className="p-3 mb-2 bg-light text-dark text-center">
                    <h4 ><FontAwesome.FaShoppingCart /> Cart</h4>
                    <StorageBasket />
                </div>
            </div>
        )
    }
}
export default Cart