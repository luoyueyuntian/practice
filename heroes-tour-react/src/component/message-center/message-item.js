import React, { Component } from 'react';

export default class MessageItem extends Component {
    render() {
        const { id, auth, message, addressee } = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{auth}</td>
                <td>{addressee}</td>
                <td>{message}</td>
            </tr>
        )
    }
}