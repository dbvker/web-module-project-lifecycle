import React from "react";
import axios from "axios";

import Follower from "./Follower";

class FollowerList extends React.Component {
    state = {
        followers: [],
        user: ""
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            user: this.props.githubUserData
        })

        axios.get(`https://api.github.com/users/${this.props.githubUser}/followers`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    followers: resp.data
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== prevState.user) {
            axios.get(`https://api.github.com/users/${this.props.githubUserData.login}/followers`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    followers: resp.data
                })
            })
        }
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