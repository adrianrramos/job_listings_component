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
                {company} 
            </div>
        )
    }
}

export default Description
