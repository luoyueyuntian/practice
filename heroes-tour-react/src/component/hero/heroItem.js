import React, { Component } from 'react';

class HeroItem extends Component {
    constructor() {
        super();
        this.viewDetail = this.viewDetail.bind(this);
    }
    viewDetail() {
        const { selectHero, hero } = this.props;
        selectHero(hero.id);
    }
    render() {
        const { id, name } = this.props.hero;
        return (
            <li onClick={this.viewDetail}><span className="badge">{id}</span>{name}</li>
        );
    }
}

export default HeroItem;