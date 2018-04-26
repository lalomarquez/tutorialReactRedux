// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// Assets
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'

import { changeColor } from '../actions/actionCreators.js'
import { GET_COLOR_URL } from '../helpers/constURL'

const ChangeColorBox = ({ color, loadColor }) => {
    return (
        <div className='wrapper'>
            <div style={{ backgroundColor: `${color.color}` }} className='box'>
                <Button color="primary" onClick={() => loadColor()}>Change Color</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        color: state.color
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadColor() {
            axios.get(GET_COLOR_URL)
                .then((response) => {
                    console.log('RESPONSE', response)
                    dispatch(changeColor("#" + response.data.new_color))
                }).catch(error => {
                    console.error('FAIL :(', error)
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeColorBox)