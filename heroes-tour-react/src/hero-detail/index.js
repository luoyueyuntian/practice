import React, { Component } from 'react';
import HeroEditForm from './component/hero-edit-form';
import RelateMessageList from './component/relate-message-list';

import './hero-detail.css';

export default class HeroDetail extends Component {
    render() {
        const { hero, msgs, unSelectHero, updateHero } = this.props;

        return (
            <div>
		    	<button className="back-btn" onClick={unSelectHero}>Back</button>
				<h2>Hero Detail Info</h2>
				<HeroEditForm hero={hero} unSelectHero={unSelectHero} updateHero={updateHero} />
				<RelateMessageList msgs={msgs} />
		    </div>
        );
    }
}