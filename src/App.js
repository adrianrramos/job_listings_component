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

    

    onTagsSelect = (selectedTag) => {
        this.setState({
            selectedTags: [...this.state.selectedTags, selectedTag]
        })
        // console.log(this.state.selectedTags)
        
    }

    render() {
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

export default App
