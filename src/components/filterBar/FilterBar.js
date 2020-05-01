import React from 'react';
import Filter from './Filter';

const FilterBar = ({ filters, deleteTag, clearTags }) => {
    return (
        <>
            {
                filters.length > 0 &&
                <div className="filter-bar-container" id="fixed-bar">
                    <div className="all-filters">
                        {
                            filters.map(filter => {
                                return <Filter filter={filter} key={filter} deleteTag={deleteTag}/>
                            })
                        }
                    </div>
                    <div className="clear-input" onClick={() => clearTags()}>
                        Clear
                    </div>
                </div>
            }
        </>
    );
};

export default FilterBar;