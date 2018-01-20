import React, { Component } from 'react';

export default class HeroManageItem extends Component {
    render() {
        const { hero, deleteHero, selectHero } = this.props;
        const { id, name } = hero;
        return (
            <li>
                <div className="badge">{id}</div>
                <div className="del-btn" onClick={() => deleteHero(id)}>Delete</div>
                <div className="hero-content" onClick={selectHero} >{name}</div>
            </li>
        )
    }
}