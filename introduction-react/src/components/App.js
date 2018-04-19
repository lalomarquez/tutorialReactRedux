import React, { Component } from 'react'
import { Container, Row, Col, Button, Nav, Card, CardTitle, CardText, CardBody } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'
import '../style/footer.css'

import { Footer } from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-dark bg-primary">
          {/* <a className="navbar-brand" href="#">Default</a> */}
          <h3 className='text-white'>Home</h3>
        </Nav>

        <Container>
          <Row>
            <Col>
              <div className="p-3 mb-2 bg-white text-dark text-center"> <h2 >The "Store"</h2></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="p-3 mb-2 bg-light text-dark text-center"> <h4 ><FontAwesome.FaTags /> Products</h4></div>
            </Col>
            <Col>
              <div className="p-3 mb-2 bg-light text-dark text-center"> <h4 ><FontAwesome.FaShoppingCart /> Shopping Cart</h4></div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>

        <footer className='site-footer'>
          <div className='footer-social'>
            <Footer />
          </div>
          <div className='identity'>
            <p>© {(new Date().getFullYear())}</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;