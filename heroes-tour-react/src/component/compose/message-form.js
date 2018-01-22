import React, { Component } from 'react';

import AddressList from './address-list';

export default class MessageForm extends Component {
    constructor() {
        super();
        this.addressInput = null;
        this.uploadAdress = this.uploadAdress.bind(this);
        this.send = this.send.bind(this);
    }
    uploadAdress(input) {
        this.addressInput = input;
    }
    send() {
        const { sendMessage } = this.props;
        const author = this.props.isLogin ? 'admin' : 'visitor';
        sendMessage(this.msgInput.value, author, this.addressInput.value);
        this.msgInput.value = '';
    }
    render() {
        const { heroes, hideContactPanel } = this.props;
        return (
            <div className="message-container">
				<span className="close-icon" onClick={hideContactPanel}>×</span>
				<div className="form-section">
		        	<span className="message-label">To:</span>
		        	<AddressList
		            heroes={heroes}
		            uploadAdress={this.uploadAdress}
		            />
		    	</div>
		    	<div className = "form-section" >
		      		<span className="message-label">Info:</span>
		      		<textarea
		            className = "message-input"
		            cols = "30"
		            rows = "10"
		            ref={(textarea) => this.msgInput = textarea}>
		      		</textarea> 
		      	</div>
		      	<div className = "edit-container" >
		      		<button onClick={this.send}>Send</button>
			        <button onClick={hideContactPanel}>Cancel</button>
			    </div>
			</div>
        );
    }
}