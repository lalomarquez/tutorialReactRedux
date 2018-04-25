// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
// Assets
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'

import { changeColor } from '../actions/actionCreators.js'

const ChangeColorBox = ({ color, loadColor }) => {
    return (
        <div className='wrapper'>
            <div style={{ backgroundColor: `${color}` }} className='box'>
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
            axios.get('http://www.colr.org/json/color/random')
                .then((response) => {
                    console.log(response.data)
                    dispatch(changeColor("#" + response.data.new_color))
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeColorBox)