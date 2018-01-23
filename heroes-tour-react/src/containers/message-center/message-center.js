import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MessageItem } from '../../component';


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
        if (msgs.length === 0) {
            return (
                <div>no message</div>
            );
        }
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
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    msgs: state.msgs,
    heroes: state.heroes
});

export default connect(mapStateToProps)(MessageCenter);