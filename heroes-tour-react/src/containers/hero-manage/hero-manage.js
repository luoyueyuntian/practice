import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addHero, deleteHero, updateHero, selectHero, unselectHero } from '../../redux/action';
import { EditableItem, AddItem, HeroDetail } from '../../component';

class HeroManage extends Component {
    componentWillUnmount() {
        this.props.unselectHero();
    }
    render() {
        const { heroes, msgs, curHeroId, updateHero, addHero, deleteHero, selectHero, unselectHero } = this.props;
        let heroDetail = '';
        if (curHeroId !== -1) {
            const MATCH_ALL = 0;
            let curHero = {
                name: '',
                id: -1
            };
            let relateMessages = [];
            heroes.forEach(hero => {
                if (hero.id === curHeroId) {
                    curHero = hero;
                }
            });
            msgs.forEach(msg => {
                if (msg.addressee === MATCH_ALL) {
                    relateMessages.push(msg);
                }
                if (msg.addressee === curHeroId) {
                    relateMessages.push(msg);
                }
            });
            heroDetail = <HeroDetail
            hero={curHero}
            msgs={relateMessages}
            updateHero={updateHero}
            unselectHero={unselectHero}
            />;
        }
        const heroItems = heroes.map(hero => (
            <EditableItem
            key={hero.id}
            id={hero.id}
            name={hero.name}
            addHero={addHero}
            deleteHander={deleteHero}
            selectHander={selectHero}
            />
        ));
        return (
            <div>
                <ul className="manage-panel-container">
                    <AddItem addBtnCallback={addHero}/>
                    {heroItems}
                </ul>
                {heroDetail}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes,
    msgs: state.msgs,
    curHeroId: state.curHeroId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addHero: bindActionCreators(addHero, dispatch),
    deleteHero: bindActionCreators(deleteHero, dispatch),
    updateHero: bindActionCreators(updateHero, dispatch),
    selectHero: bindActionCreators(selectHero, dispatch),
    unselectHero: bindActionCreators(unselectHero, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroManage);