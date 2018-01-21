import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './message-center/message-list';


class MessageCenter extends Component {
    render() {
        const { msgs, heroes } = this.props;
        return (
            <MessageList msgs={msgs} heroes={heroes} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    msgs: state.msgs,
    heroes: state.heroes
});

export default connect(mapStateToProps)(MessageCenter);