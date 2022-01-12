import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

import './index.css';

class App extends React.Component {
  state = {
    githubUserData: [],
    githubUser: ""
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/dbvker`)
      .then(resp => {
        this.setState({
          ...this.state,
          githubUserData: resp.data
        });
      })
  }

  handleSearchTerm = (e) => {
    this.setState({
      ...this.state,
      githubUser: e.target.value
    })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("searched")

    const user = this.state.githubUser;

  }

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form onSubmit={this.handleSearchSubmit}>
        <input onChange={this.handleSearchTerm} type='text' placeholder='GitHub Handle'/>
        <button>Search</button>
      </form>
      <User githubUserData={this.state.githubUserData} />
      <FollowerList />
    </div>);
  }
}

export default App;
