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
    const user = this.state.githubUser;

    axios.get(`https://api.github.com/users/${user}`)
      .then(resp => {
        this.setState({
          ...this.state,
          githubUserData: resp.data
        })
      })
  }

  render() {
    return(<div>
      <h1><center>GITHUB INFO</center></h1>
      <form onSubmit={this.handleSearchSubmit} className="search-form">
        <input onChange={this.handleSearchTerm} type='text' placeholder='GitHub Handle'/>
        <button>Search</button>
      </form>
      <User githubUserData={this.state.githubUserData} />
      <FollowerList githubUser={this.state.githubUser} />
    </div>);
  }
}

export default App;
