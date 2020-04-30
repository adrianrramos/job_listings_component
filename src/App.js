import React, { Component } from 'react';
import * as data from './data.json';

import Footer from './components/Footer';
import JobBoard from './components/jobBoard/JobBoard';
import FilterBar from './components/filterBar/FilterBar';

export class App extends Component {
    state = {
        main_data: data.default,
        selectedPosts: data.default,
        selectedTags: ["Penis Bologny Nigga"]
    }

    onTagsSelect = (selectedTag) => {
        if(selectedTag === this.state.selectedTags.find(tag => tag === selectedTag)) {
            return null;
        }
        return this.setState({ selectedTags: [...this.state.selectedTags, selectedTag] });
    }

    onTagDelete = (selectedTag) => {
        const newSelectedTags = this.state.selectedTags.filter(tag => tag !== selectedTag);
        this.setState({ selectedTags: newSelectedTags });
    }

    clearAllSelectedTags = () => {
        this.setState({ selectedTags: [] });
    }

    getJobTags = (job) => {
        let tags = [];
        
        tags.push(job.role);
        job.tools && tags.push(...job.tools);
        job.languages && tags.push(...job.languages);
    
        return tags;
    };

    allTagsInsideOf = (postTags, selectedTags) => {
        let matches = []
        for(let i=0; i<selectedTags.length; i++) {
            matches.push(postTags.find(tag => tag === selectedTags[i]));
        }
        if (JSON.stringify(matches) === JSON.stringify(selectedTags)) {
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedTags !== this.state.selectedTags) {
            // create special array of all jobs with their tags and selected status
            let postTags = [];
            this.state.main_data.map(job => {
                return postTags = [ ...postTags, { id: job.id, tags: this.getJobTags(job), selected: true } ];
            });
        
            // filter out postTags based on current selected tags
            postTags.map(post => {
                if(this.allTagsInsideOf(post.tags, this.state.selectedTags)){
                    return post.selected = true;
                }
                return post.selected = false;
            });

            // grab all obnjects from posTags that have selected = true 
            const selectedIds = postTags.filter(post => post.selected === true);
            
            // grab all posts that match with the currently selected from postTags
            let newSelectedPosts = []
            for(let i = 0; i < selectedIds.length; i++){
                let id = selectedIds[i].id;
        
                let post = this.state.main_data.filter(post => post.id === id);
        
                newSelectedPosts = [...newSelectedPosts, post[0]];
            }

            this.setState({ selectedPosts: [...newSelectedPosts] });
        }
    }

    render() {

        return (
            <div id="main-container">
                <div className="page-header">
                </div>
                <div id="filter-bar-container">
                    <FilterBar filters={this.state.selectedTags} deleteTag={this.onTagDelete} clearTags={this.clearAllSelectedTags}/>
                </div>
                <div id="job-board-container">
                    <JobBoard data={this.state.selectedPosts} onTagSelect={this.onTagsSelect} getJobTags={this.getJobTags}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;