import React from "react";

import Follower from "./Follower";

class FollowerList extends React.Component {
    state = {
        followers: ["Dylan", "Alex", "Dylan", "Alex", "Dylan", "Alex", "Dylan", "Alex", "Dylan", "Alex"]
    }

    render() {
        return (
            <div>
                <h2>FOLLOWERS:</h2>
                <div className="follower-list-container">
                    {this.state.followers.map((user, index) => {
                        return (
                            <Follower user={user} key={index} />
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default FollowerList;