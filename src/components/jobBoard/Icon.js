import React from 'react';

const Icon = ({avi, company}) => {
    return (
        <div>
            <img src={avi} alt={company}></img>
        </div>
    )
}

export default Icon;
