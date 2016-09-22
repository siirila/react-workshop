import React, {PropTypes, Component} from 'react'

class RepoList extends Component {
  state = {repos: []}

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=250&sort=updated`)
      .then(res => res.json())
      .then(data => this.setState({repos: data}))
  }

  render() {
    return (
      <div>
        <h1>{this.props.username}'s repos</h1>
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

export default RepoList
