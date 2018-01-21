import React, { Component } from 'react';
import HeroEditForm from './component/hero-edit-form';
import RelateMessageList from './component/relate-message-list';

import './hero-detail.css';

export default class HeroDetail extends Component {
    render() {
        const { hero, msgs, unSelectHero, updateHero } = this.props;

        return (
            <div className="hero-detail-container">
				<h3>
					<span className="title">Hero Detail Info</span>
				</h3>
				<HeroEditForm hero={hero} unSelectHero={unSelectHero} updateHero={updateHero} />
				<h3>
					<span className="title">Recevied Message</span>
				</h3>
				<RelateMessageList msgs={msgs} />
		    </div>
        );
    }
}