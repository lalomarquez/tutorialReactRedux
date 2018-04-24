// Dependencies
import React from 'react'
import { Alert } from 'reactstrap';

class ConsumeAPI extends React.Component {
    render() {
        return (
            <div>
                <Alert color="primary">
                    <h1 className='text-center'>API Call with AXIOS</h1>
                    <strong>
                        <p>Redux middleware for fetching data with axios HTTP client</p>
                    </strong>
                </Alert>
            </div>
        )
    }
}

export default ConsumeAPI