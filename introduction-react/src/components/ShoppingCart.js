// Dependencies
import React from 'react'
import { Row, Col } from 'reactstrap'

import Product from './Product'
import Cart from './Cart'

class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1 className='text-center'>Shopping Cart</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Cart />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ShoppingCart