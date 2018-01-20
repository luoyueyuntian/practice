import React, { Component } from 'react';

export default class RelateMessageList extends Component {
    render() {
        const { msgs } = this.props;
        let msgList = '';
        if (msgs.length === 0) {
            msgList = (<li >none message!</li>);
        } else {
            msgList = msgs.map((msg) => (<li key={msg.id}>{msg.message}</li>));
        }
        return (
            <ul className="message-list-container">
			    {msgList}
			</ul>
        );
    }
}