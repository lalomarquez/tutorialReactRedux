// Dependencies
import React from 'react'
import { Alert } from 'reactstrap';
// Container
import ChangeColorBox from '../container/ChangeColorBox'

class BoxColor extends React.Component {
    render() {
        return (
            <div>
                <Alert color="primary">
                    <strong>
                        <p>Changing the color of the box by means of an API http://www.colr.org/json/color/random</p>
                    </strong>
                </Alert>
                <ChangeColorBox />
            </div >
        )
    }
}

export default BoxColor