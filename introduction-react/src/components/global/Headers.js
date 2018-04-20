// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

class Headers extends React.Component {
    render() {
        const { items } = this.props
        console.log('headers', items)
        return (
            <div>
                <ul className="Menu">
                    {
                        items.map((item, key) =>
                            <li key={key}>
                                <strong>
                                    <Link to={item.url}>
                                        {item.title}
                                    </Link>
                                </strong>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default Headers