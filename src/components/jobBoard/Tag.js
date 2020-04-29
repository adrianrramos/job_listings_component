import React, { Component } from 'react'

export class Tag extends Component {
    state = {
        marked: false,
    }

    onTagSelected = (tag, onTagSelect) => {
        onTagSelect(tag);
        
        
        this.setState({ marked: !this.state.marked });

    }

         
    
    render() {
        const { tag, onTagSelect } = this.props;

        const classStyle = "tag " + (this.state.marked ? 'filled-background' : '');
        
        return (
            <div className={classStyle} onClick={() => this.onTagSelected(tag, onTagSelect)}>
                {tag}
            </div>
        )
    }
}

export default Tag;