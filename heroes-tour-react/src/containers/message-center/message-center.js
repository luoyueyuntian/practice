import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MessageItem } from '../../component';
import './message-center.css';


class MessageCenter extends Component {
    getAddresseeById(id) {
        const heroes = this.props.heroes;
        let addressee = 'unknown';
        if (id === 0) {
            return 'All';
        }
        heroes.forEach(hero => {
            if (hero.id === id) {
                addressee = hero.name;
            }
        });
        return addressee;
    }
    render() {
        const { msgs } = this.props;
        const messageList = msgs.map(message => {
            let msgInfo = {};
            msgInfo.key = message.id;
            msgInfo.id = message.id;
            msgInfo.auth = message.auth;
            msgInfo.message = message.message;
            msgInfo.addressee = this.getAddresseeById(message.addressee);
            return <MessageItem {...msgInfo} />;
        })
        return (
            <div>
                <table className="msg-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>MESSAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messageList}
                    </tbody>
                </table> 
                {msgs.length === 0 ? (<div>no message</div>) : '' }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    msgs: state.msgs,
    heroes: state.heroes
});

export default connect(mapStateToProps)(MessageCenter);