import React, {Component} from 'react';

class Post extends Component {
    style = {
        margin: '30px',
        padding: '30px',
        backgroundColor: "white",
        boxShadow: '0 0 10px rgba(0,0,0,0.5)', /* Параметры тени */
    };
    render() {
        return (
            <div onClick={() => this.props.likeHandle(this.props.id)} className="gallery-item">

                <img src={this.props.img} className="gallery-image" alt=""/>

                <div className="gallery-item-info">

                    <ul>
                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> {this.props.likes.length}</li>
                    </ul>

                </div>

            </div>
        );
    }
}

export default Post;