import React from 'react';

const Tag = ({ tag, onTagSelect }) => {

    const onTagSelected = (tag, onTagSelect) => {
        onTagSelect(tag);
    };

    return (
        <div className="tag" onClick={() => onTagSelected(tag, onTagSelect)}>
            {tag}
        </div>
    );
};

export default Tag;