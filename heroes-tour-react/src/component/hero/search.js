import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }
    _filterHeroes(heroes, term) {
        if (term === '') {
            return [];
        }
        return heroes.filter(hero => hero.name.indexOf(term) !== -1)
    }
    reFilter(term) {
        this.setState({
            term: term
        });
    }
    render() {
        const { heroes, selectHero } = this.props;
        let SearchResultList = '';
        const term = this.state.term;
        if (term !== '') {
            const result = this._filterHeroes(heroes, term);
            SearchResultList = (
                <ul className="search-result-list">
				    {result.map(hero => (<li key={hero.id} onClick={()=>selectHero(hero.id)}>{hero.name}</li>))}
				</ul>
            );
        }
        return (
            <div>
				<div className="search-container">
				    <div className="search-btn-container">
				        <i className="fa fa-search" aria-hidden="true"></i>
				    </div>
				    <div className="input-container">
				        <input type="text" className="search-input" defaultValue={term} onKeyUp={(e) => this.reFilter(e.target.value)} />
				    </div>
				</div>
				<div>
				    {SearchResultList }
				</div>
			</div>
        );
    }
}