import React from 'react';
import Tag from './Tag';

const Tags = ({tags}) => {
    return (
        <div className="tags-box">
            {tags.map(tag => <Tag tag={tag} key={tag}/>)}
        </div>
    );
};

export default Tags;