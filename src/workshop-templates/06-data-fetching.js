import React, {PropTypes, Component} from 'react'
// WORKSHOP_START
// for our data fetching needs, we're going to use the fetch API,
// if you're shipping to older browsers you're going to need something like axios
//
// It is best not to fetch data from a server in the `render` method. As we
// saw in the last exercise any change to the state of a component can cause
// a re-render of the component. This will likely happen more often than we
// want. It is best to use another lifecycle method `componentWillMount` to
// make these requests. This method will be called once before the component
// is inserted into the document, regardless of how many times `render` is
// called.
//
// Example:
//
//  ```
// class UserProfile extends Component {
//   state = {user: {}}
//
//   componentWillMount() {
//     fetch(`/users/${this.props.username}`)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({user: data})
//       })
//   }
//
//   render() {
//     const user = this.state.user
//     return (
//       <div>
//         <div>First name: {user.firstName}</div>
//         <div>Last name: {user.lastName}</div>
//         <div>Email address: {user.emailAddress}</div>
//       </div>
//     )
//   }
// }
//
// UserProfile.propTypes = {
//   username: PropTypes.number.isRequired
// }
//  ```
//
// See https://facebook.github.io/react/docs/component-specs.html
//
// Exercise:
//
//  Create a `RepoList` component that lists all the GitHub repos for a user.
//  Allow the user to be provided as a prop.
//
//  https://api.github.com/users/{username}/repos
//
// Tip:
// - You may end up getting throttled by GitHub if you keep refreshing and making unauthenticated requests to their API
//   to avoid this, I recommend you return some fake data in `componentWillMount` and only implement that when you're
//   done with everything else.
// WORKSHOP_END

class RepoList extends Component {
  // FINAL_START
  state = {repos: []}

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=250&sort=updated`)
      .then(res => res.json())
      .then(data => this.setState({repos: data}))
  }

  // FINAL_END
  render() {
    // WORKSHOP_START
    return (
      <div>
        User repos!
      </div>
    )
    // WORKSHOP_END
    // FINAL_START
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
    // FINAL_END
  }
}

RepoList.propTypes = {
  username: PropTypes.string
}

// WORKSHOP_START
export const example = () => (
  <div>Render the RepoList here</div>
)
// WORKSHOP_END
// FINAL_START
export const example = () => (
  <RepoList username="kentcdodds" />
)
// FINAL_END

export default RepoList
