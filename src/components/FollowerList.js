import React from "react";
import axios from "axios";

import Follower from "./Follower";

class FollowerList extends React.Component {
    state = {
        followers: [],
    }

    componentDidMount(){
        const user = this.props.githubUser
        axios.get(`https://api.github.com/users/${this.props.githubUser}/followers`)
            .then(resp => {
                console.log("RESPONSE: ", resp.data);
                console.log(`URL: https://api.github.com/users/${user}/followers`);
                this.setState({
                    ...this.state,
                    followers: resp.data
                })
            })
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