import React, {PropTypes, Component} from 'react'
import axios from 'axios'

export default RepoList

class RepoList extends Component {
  state = {repos: []}

  componentWillMount() {
    axios(`https://api.github.com/users/${this.props.username}/repos?per_page=250&sort=updated`)
      .then(response => {
        this.setState({
          repos: response.data,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>{this.props.username}'s Repos</h1>
        <ul style={{textAlign: 'left'}}>
          {this.state.repos.map((repo) => {
            return <li key={repo.id}>{repo.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

RepoList.propTypes = {
  username: PropTypes.string
}

export const example = () => (
  <RepoList username="kentcdodds" />
)
