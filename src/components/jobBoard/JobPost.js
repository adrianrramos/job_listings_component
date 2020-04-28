import React from 'react';
import Icon from './Icon';
import Description from './Description';
import Tags from './Tags';

const JobPost = ({ 
    avi, 
    company, 
    newPost, 
    position, 
    featured, 
    postedAt, 
    contract, 
    location, 
    tags 
}) => {
    return (
        <div className="job-post">
            <div className="icon-box">
                <Icon avi={avi} alt={company}/>
            </div>
            <div className="description-container">
                <Description 
                    company={company}
                    newPost={newPost}
                    position={position}
                    featured={featured}
                    postedAt={postedAt}
                    contract={contract}
                    location={location}
                />
            </div>
            <div className="tags-container">
                <Tags tags={tags}/>
            </div>
        </div>
    )
}

export default JobPost
