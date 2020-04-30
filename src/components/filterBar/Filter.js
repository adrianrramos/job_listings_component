import React from 'react';

const Filter = ({ filter, deleteTag }) => {
    return (
        <div className="filter-box">
            <div className="filter">
                {filter}
            </div>
            <div className="filter-delete" onClick={() => deleteTag(filter)}>
                <i class="fas fa-times"></i>
            </div>
        </div>
    )
}

export default Filter;