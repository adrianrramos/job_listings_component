import React from 'react';

const Icon = ({avi, company}) => {
    return (
        <div className="icon-box">
            <img src={avi} alt={company} className="icon"/>
        </div>
    )
}

export default Icon;
