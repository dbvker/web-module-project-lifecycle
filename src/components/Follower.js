import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div className="follower-container">
                <a href={this.props.user.home_url}>
                    <img draggable="false" src={this.props.user.avatar_url} />
                    <p>{this.props.user.login}</p>
                </a>
            </div>
        )
    }
}

export default Follower;