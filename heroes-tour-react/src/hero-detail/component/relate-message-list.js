import React, { Component } from 'react';

export default class RelateMessageList extends Component {
    render() {
        const { msgs } = this.props;
        let msgList = '';
        if (msgs.length === 0) {
            msgList = (<li className="empty-message">none message!……</li>);
        } else {
            msgList = msgs.map((msg) => (
                <li key={msg.id}>
	                <span className="msg-author">{msg.auth}</span>
	                <span className="msg-content">{msg.message}</span>
            	</li>
            ));
        }
        return (
            <ul className="message-list-container">
			    {msgList}
			</ul>
        );
    }
}