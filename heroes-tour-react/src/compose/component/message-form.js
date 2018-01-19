import React, { Component } from 'react';

import AddressList from './address-list';

export default class MessageForm extends Component {
    render() {
        const { heroes } = this.props;
        return (
            <div className="message-container">
				<span className="close-icon" >×</span>
				<div className="form-section">
		        	<span className="message-label">To:</span>
		        	<AddressList heroes={heroes}/>
		    	</div>
		    	<div className = "form-section" >
		      		<span className="message-label">Info:</span>
		      		<textarea className = "message-input" cols = "30" rows = "10" ></textarea> 
		      	</div>
		      	<div className = "edit-container" >
		      		<button >Send</button>
			        <button >Cancel</button>
			    </div>
			</div>
        )
    }
}