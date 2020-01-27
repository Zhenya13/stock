import React, {Component} from 'react';
import PostsContainer from "./PostsContainer";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PostsContainer likeHandle={this.props.likeHandle} posts={this.props.posts}/>
            </div>
        );
    }
}

export default Home;