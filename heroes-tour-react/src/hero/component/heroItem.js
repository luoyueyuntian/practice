import React, { Component } from 'react';

class HeroItem extends Component {
    render() {
        const { id, name } = this.props.hero;
        return (
            <li><span className="badge">{id}</span>{name}</li>
        );
    }
}

export default HeroItem;