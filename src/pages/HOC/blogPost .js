import React from 'react';
import { DataSource } from './utils';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
    }
    
    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }
    
    componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
    this.setState({
        blogPost: DataSource.getBlogPost(this.props.id)
    });
    }
    
    render() {
        return <p>{this.state.blogPost}</p>;
    }
}

export default BlogPost;
