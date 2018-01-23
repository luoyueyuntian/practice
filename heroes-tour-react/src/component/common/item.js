import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
                <li className="clickable" onClick={() => clickHander(id)}><span className="badge">{id}</span>{name}</li>
            )
        } else {
            return (
                <li><span className="badge">{id}</span>{name}</li>
            )
        }

    }
}

export default Item;