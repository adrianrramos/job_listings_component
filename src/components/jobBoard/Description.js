import React, { Component } from 'react'

export class Description extends Component {
    render() {
        const { 
            company, 
            newPost, 
            position, 
            featured, 
            postedAt, 
            contract, 
            location, 
        } = this.props;
        return (
            <div className="description-box"> 
                <div className="desc-top">
                    <p className="company">{company}</p>
                    {newPost && <div className="new flair">new</div>}
                    {featured && <div className="featured flair">featured</div>}
                </div>
                <div className="desc-middle">
                    <h5 className="position">{position}</h5>
                </div>
                <div className="desc-bottom">{postedAt} &middot; {contract} &middot; {location}</div>
            </div>
        )
    }
}

export default Description
