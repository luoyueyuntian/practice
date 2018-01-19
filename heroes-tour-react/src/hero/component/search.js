import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        const { heroes, filterValue } = this.props;
        let SearchResultList = '';
        if (filterValue !== '') {
            const result = heroes.filter(hero => hero.name.indexOf(filterValue) !== -1);
            SearchResultList = (
                <ul className="search-result-list">
				    {result.map(hero => (<li key={hero.id}>{hero.name}</li>))}
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
				        <input type="text" className="search-input" />
				    </div>
				</div>
				<div>
				    {SearchResultList }
				</div>
			</div>
        );
    }
}