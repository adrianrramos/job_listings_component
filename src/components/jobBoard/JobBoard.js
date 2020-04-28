import React from 'react'
import JobPost from './JobPost'

const JobBoard = ({ data }) => {
    return (
        <div className="job-board">
            {data.map(job =>  (
                <div className="job-post-container" key={job.id}>
                    <JobPost
                        key={job.id}
                        // Icon  Props
                        avi={job.logo}
                        // Descripton Props
                        company={job.company}
                        newPost={job.new}
                        position={job.position}
                        featured={job.featured}
                        postedAt={job.postedAt}
                        contract={job.contract}
                        location={job.location}
                        // Tags Props
                        tags={getJobTags(job)}
                    />
                </div>
            ))}
        </div>
    )
};

// Return array of all different tags from job object
const getJobTags = (job) => {
    let tags = [];
    
    if(job.tools ){
        tags.push(...job.tools);
    }
    if(job.languages){
        tags.push(...job.languages);
    }

    tags.push(job.role);
    return tags;
};

export default JobBoard;