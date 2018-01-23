import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddItem extends Component {
    static propTypes = {
        addBtnCallback: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.add = this.add.bind(this);
    }
    add() {
        this.props.addBtnCallback(this.propNameInput.value);
        this.propNameInput.value = '';
    }
    render() {
        return (
            <li className="add-hero-container">
                <span className="add-btn" onClick={this.add}>Add</span>
                <input type="text" ref={(input) => this.propNameInput = input} />
            </li>
        )

    }
}

export default AddItem;