import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './item.css'

class Item extends Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.number,
        clickHander: PropTypes.func
    }
    render() {
        const { name, id, clickHander } = this.props;
        if (clickHander) {
            return (
                <li className="item-container clickable" onClick={() => clickHander(id)}><span className="badge">{id}</span>{name}</li>
            )
        } else {
            return (
                <li className="item-container"><span className="badge">{id}</span>{name}</li>
            )
        }

    }
}

export default Item;