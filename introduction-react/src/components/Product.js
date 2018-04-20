// Dependencies
import React from 'react'

// Assets
import * as FontAwesome from 'react-icons/lib/fa'

class Product extends React.Component {
    render() {
        return (
            <div>
                <div className="p-3 mb-2 bg-light text-dark text-center">
                    <h4 ><FontAwesome.FaTags /> Products</h4>
                </div>
            </div>
        )
    }
}
export default Product