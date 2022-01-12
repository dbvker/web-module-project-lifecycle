import React from "react";

class User extends React.Component {

    render() {
        return (
            <div className="user-container">
                <div className='user-pic'>
                    <img src={this.props.githubUserData.avatar_url} />
                </div>
                <div className="user-info">
                    <h2>{this.props.githubUserData.name}</h2>
                    <h4>{this.props.githubUserData.bio}</h4>
                    <p>TOTAL REPOS: {this.props.githubUserData.public_repos}</p>
                    <p>TOTAL FOLLOWERS: {this.props.githubUserData.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;