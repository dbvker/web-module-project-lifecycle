import React from "react";

class User extends React.Component {

    render() {
        return (
            <div className="user-container">
                <div className='user-pic'>
                    <img draggable="false" src={this.props.githubUserData.avatar_url} />
                </div>
                <div className="user-info">
                    <h2><a href={this.props.githubUserData.html_url} target='_blank'>{this.props.githubUserData.name}</a></h2>
                    <h4>{this.props.githubUserData.bio}</h4>
                    <p>TOTAL REPOS: {this.props.githubUserData.public_repos}</p>
                    <p>TOTAL FOLLOWERS: {this.props.githubUserData.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;
