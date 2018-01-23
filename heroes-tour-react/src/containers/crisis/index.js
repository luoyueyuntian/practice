import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from '../../component';

class Crisis extends Component {
    render() {
        const { crisisLibary } = this.props;
        return (
            <ul className="list">
				{crisisLibary.map(crisis => <Item key={crisis.id} id={crisis.id} name={crisis.name}/>)}
			</ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    crisisLibary: state.crisisLibary
})
export default connect(mapStateToProps)(Crisis);