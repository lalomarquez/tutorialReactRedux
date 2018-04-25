// Dependencies
import React from 'react'
import { connect } from 'react-redux'
// Assets
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'

import { addToCart } from '../actions/actionCreators.js'

const ProductList = ({ products, addProduct }) => {    
    return (
        <div >
            <div className="row col-12">
                {products.map((product, i) =>
                    <div key={i}>
                        <Card>
                            <CardImg top width="100%" src={product.image} />
                            <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <p>Precio: $ {product.precio}</p>
                                <Button color="primary" onClick={() => addProduct(product)}>Add to Cart</Button>
                            </CardBody>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.store.products
    }
}

const mapDispatchToProps = dispatch => {    
    return {
        addProduct(product) {
            dispatch(addToCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)