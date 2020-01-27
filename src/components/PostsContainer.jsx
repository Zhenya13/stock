import React, { Component } from "react";
import Post from "./Post";

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="gallery">
            {this.props.posts.map(post => {
              return (
                <Post
                  key={post.img}
                  likeHandle={this.props.likeHandle}
                  id={post.id}
                  img={post.img}
                  description={post.description}
                  likes={post.likes}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PostsContainer;
