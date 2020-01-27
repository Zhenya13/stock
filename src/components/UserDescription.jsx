import React, {Component} from 'react';

class UserDescription extends Component {
    render() {
        return (
            <header>

                <div className="container">

                    <div className="profile">

                        <div className="profile-image">

                            <img src={this.props.img} alt=""/>

                        </div>

                        <div className="profile-user-settings">

                            <h1 className="profile-user-name">{this.props.name}</h1>

                            <button className="btn profile-edit-btn">Edit Profile</button>

                            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                        </div>

                        <div className="profile-stats">

                            <ul>
                                <li><span className="profile-stat-count">{this.props.postsAmount}</span> posts</li>
                            </ul>

                        </div>

                        <div className="profile-bio">

                            <p>{this.props.description}</p>

                        </div>

                    </div>

                </div>

            </header>
        );
    }
}

export default UserDescription;