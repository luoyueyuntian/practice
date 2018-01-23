import React, { Component } from 'react';
import PropTypes from 'prop-types'

class EditableItem extends Component {
    static propTypes = {
        itemAttr: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number
        }),
        selectHander: PropTypes.func,
        deleteHander: PropTypes.func.isRequired
    }
    render() {
        const { id, name, selectHander, deleteHander } = this.props;
        return (
            <li>
                <div className="badge">{id}</div>
                <div className="del-btn" onClick={() => deleteHander(id)}>Delete</div>
                <div className="hero-content" onClick={() => selectHander(id)}>{name}</div>
            </li>
        )

    }
}

export default EditableItem;