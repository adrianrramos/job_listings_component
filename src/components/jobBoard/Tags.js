import React from 'react';
import Tag from './Tag';

const Tags = ({ tags, onTagSelect }) => {
    return (
        <div className="tags-box">
            {tags.map(tag => <Tag tag={tag} key={tag} onTagSelect={onTagSelect}/>)}
        </div>
    );
};

export default Tags;