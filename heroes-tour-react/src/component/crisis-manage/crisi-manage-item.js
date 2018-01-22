import React, { Component } from 'react';

export default class CrisisManageItem extends Component {
    render() {
        const { crisis, deleteCrisis, selectCrisis } = this.props;
        const { id, name } = crisis;
        return (
            <li>
                <div className="badge">{id}</div>
                <div className="del-btn" onClick={()=>deleteCrisis(id)}>Delete</div>
                <div className="hero-content" onClick={()=>selectCrisis(id)}>{name}</div>
            </li>
        )
    }
}