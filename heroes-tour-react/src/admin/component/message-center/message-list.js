import React, { Component } from 'react';

class MsgItem extends Component {
    render() {
        const { id, message } = this.props.msg;
        return (
            <li>
                <span>{id}</span>
                <span>{message}</span>
            </li>
        );
    }
}

export default class MessageList extends Component {
    render() {
        const { msgs } = this.props;
        if (msgs.length === 0) {
            return (
                <div>no message</div>
            );
        }
        return (
            <ul>
                {msgs.map((msg) => (<MsgItem key={msg.id} msg={msg}/>))}
            </ul>
        );
    }
}