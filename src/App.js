import React, { Component } from 'react';
import * as data from './data.json';

import Footer from './components/Footer';
import JobBoard from './components/jobBoard/JobBoard';
import FilterBar from './components/filterBar/FilterBar';

export class App extends Component {
    state = {
        main_data: data.default,
        selectedPosts: data.default,
        selectedTags: []
    }

    componentDidMount() {
        console.log("Mounted with these: " + this.state.selectedTags)
    }

    onTagsSelect = (selectedTag) => {
        this.setState({ selectedTags: [...this.state.selectedTags, selectedTag] });
        
        let postTags = [];
        [...this.state.main_data].map(job => {
            let tags = [];
            tags.push(job.role);
            job.tools && tags.push(...job.tools);
            job.languages && tags.push(...job.languages);
            
            postTags = [ ...postTags, { id: job.id, tags: tags, selected: true } ];

        });

        // filter out postTags based on selected tags
        [...postTags].map(post => {
            for(let i=0; i < post.tags.length; i++){
                for(let j=0; j < this.state.selectedTags.length; j++) {
                    if(post.tags[i] === this.state.selectedTags[j]) {
                        return post.selected = true;
                    }
                }
            }
            return post.selected = false;
        })

        const selectedIds = [...postTags].filter(post => post.selected === true);
        console.log(selectedIds)

        let newSelectedPosts = []

        for(let i = 0; i < selectedIds.length; i++){
            let id = selectedIds[i].id;

            let post = [...this.state.selectedPosts].filter(post => post.id === id);

            newSelectedPosts = [...newSelectedPosts, post[0]];
        }

        // this.setState({ selectedPosts: [...newSelectedPosts] });
        console.log(newSelectedPosts)
    }

    render() {
        console.log("Rendered with these: " + this.state.selectedTags);

        return (
            <div id="main-container">
                <div id="filter-bar-container">
                    <FilterBar filters={this.state.selectedTags}/>
                </div>
                <div id="job-board-container">
                    <JobBoard data={this.state.selectedPosts} onTagSelect={this.onTagsSelect}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;