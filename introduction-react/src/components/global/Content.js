// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

class Content extends React.Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    render() {
        const { body } = this.props
        console.log('Content', body)
        return (
            <div>
                {body}
            </div>
        )
    }
}
export default Content