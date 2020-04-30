import React from 'react'
import JobPost from './JobPost'

const JobBoard = ({ data, onTagSelect, getJobTags }) => {
    return (
        <div className="job-board">
            {data.map(job =>  (
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
                        onTagSelect={onTagSelect}
                    />
            ))}
        </div>
    )
};

export default JobBoard;