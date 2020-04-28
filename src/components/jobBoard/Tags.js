import React from 'react';

const Tags = ({tags}) => {
    return (
        <div className="tags-box">
            {tags.map(tag => tag + ", ")}
        </div>
    )
}

export default Tags;