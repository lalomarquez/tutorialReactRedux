// Dependencies
import React from 'react'
import { Container, Row, Col, Nav, Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'

// Assets
//import * as FontAwesome from 'react-icons/lib/fa'
import '../style/footer.css'

// Components
//import Home from '../components/Home'
import Content from '../components/Content'
import { Footer } from './Footer'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props
    console.log('App', children)

    return (
      <div>
        <Nav className="navbar navbar-dark bg-primary">
          {/* <a className="navbar-brand" href="#">Default</a> */}
          <h3 className='text-white'>Home</h3>
        </Nav>

        <Container>
          <Row>
            <Col>
              <Jumbotron id='jumbotron'>
                <Content body={children} />
              </Jumbotron>
            </Col>
          </Row>
        </Container>

        <footer className='site-footer'>
          <div className='footer-social'>
            <Footer />
          </div>
        </footer>
      </div>
    )
  }
}
export default App