// Dependencies
import React from 'react'
import { Container, Row, Col, Nav, Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'

// Assets
import '../style/style.css'

// Components
import Headers from './global/Headers'
import Content from './global/Content'
import { Footer } from './global/Footer'
import itemHeader from '../helpers/Menu'

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props
    // console.log('App', children)

    return (
      <div>
        <Nav className="navbar navbar-dark bg-primary">
          <Headers className='text-white text-left' items={itemHeader} />
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