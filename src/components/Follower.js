import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div className="follower-container">
                <img src="https://avatars.githubusercontent.com/u/38574400?v=4" />
                <p>{this.props.user}</p>
            </div>
        )
    }
}

export default Follower;