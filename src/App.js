import React, { Component } from 'react';
import * as data from './data.json';

import Footer from './components/Footer';
import JobBoard from './components/jobBoard/JobBoard';

export class App extends Component {
    state = {
        main_data: data.default,
        selectedPosts: data.default,
    }

    render() {
        return (
            <div id="main-container">
                <div id="filter-bar-container">
                </div>
                <div id="job-board-container">
                    <JobBoard data={this.state.selectedPosts}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App
