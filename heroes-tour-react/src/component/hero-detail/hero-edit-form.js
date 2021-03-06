import React, { Component } from 'react';

export default class HeroEditForm extends Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
    }
    componentDidUpdate() {
        this.newHeroNameInput.value = this.props.hero.name;
    }
    save() {
        const { hero, updateHero, unselectHero } = this.props;
        const newHeroName = this.newHeroNameInput.value;
        updateHero(hero.id, newHeroName);
        unselectHero();
    }
    render() {
        const { unselectHero, hero } = this.props;
        const { id, name } = hero;
        return (
            <ul className="edit-form-container">
			    <li className="edit-blocking">
			        <span>id:</span>{id}
			    </li>
			    <li className="edit-blocking">
			        <span>name:</span>
			        <input type="text" ref={(input)=>this.newHeroNameInput=input} defaultValue={name}/>
			    </li>
			    <li className="edit-btn-container">
			        <button className="edit-btn" onClick={this.save}>Save</button>
			        <button className="edit-btn" onClick={unselectHero} >Cancel</button>
			    </li>
			</ul>
        );
    }
}