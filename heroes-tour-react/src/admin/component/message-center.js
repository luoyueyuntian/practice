import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './message-center/message-list';


class MessageCenter extends Component {
    render() {
        const { msgs } = this.props;
        return (
            <MessageList msgs={msgs} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    msgs: state.msgs
});

export default connect(mapStateToProps)(MessageCenter);