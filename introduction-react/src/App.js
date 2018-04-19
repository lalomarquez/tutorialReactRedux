import React, { Component } from 'react'
import { Container, Row, Col, Button, Nav, Card, CardTitle, CardText, CardHeader, CardFooter, CardBody, CardImg } from 'reactstrap'
import { Footer } from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Default</a>
        </Nav>
        <Container>
          <Row>
            <Col>
              <div className="p-3 mb-2 bg-white text-dark text-center"> <h1 >Shoopin Cart</h1></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card body outline color="primary">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjhrzcK1vAsqpNCeQcsRyE_OAiCBz0ZU2daUuEz4WIkX37aC-2w"
                  className="rounded mx-auto d-block img-thumbnail"
                  alt="Responsive image" />

                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <CardBody>
                  <Button color="primary" >Add to Cart</Button>
                </CardBody>
              </Card>
            </Col>
            <Col>
            <Card body outline color="primary">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjhrzcK1vAsqpNCeQcsRyE_OAiCBz0ZU2daUuEz4WIkX37aC-2w"
                  className="rounded mx-auto d-block"
                  alt="Responsive image" />

                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <CardBody>
                  <Button color="primary" >Add to Cart</Button>
                </CardBody>
              </Card> 
            </Col>
          </Row>
          <Row>

            <Col></Col>
          </Row>

          {/* <Row>
            <Col></Col>
            <Col></Col>
          </Row> */}
        </Container>
        <footer className='site-footer'>
          <div className='wrapper'>
            <div className='footer-social'>
              <Footer />
            </div>
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