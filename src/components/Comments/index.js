import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentCount: 0, initial: []}

  onName = event => {
    this.setState({name: event.target.value})
  }
  onComment = event => {
    this.setState({comment: event.target.value})
  }
  onAdding = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newItem = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: true,
    }
    this.setState(prevstate => ({
      initial: [...prevstate.initial, newItem],
      commentCount: prevstate.commentCount + 1,
      name: '',
      comment: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      initial: prevState.initial.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  deleteUser = id => {
    const {initial, commentCount} = this.state
    const filteredUsersData = initial.filter(each => each.id !== id)
    this.setState(prevstate => ({
      initial: filteredUsersData,
      commentCount: prevstate.commentCount - 1,
    }))
  }

  render() {
    const {name, comment, commentCount, initial} = this.state
    return (
      <div className="back">
        <form onSubmit={this.onAdding}>
          <h1>Description</h1>
          <h1>Comments</h1>
          <p>Say something about 4.o Technologies</p>
          <input value={name} placeholder="Your Name" onChange={this.onName} />
          <textarea
            value={comment}
            placeholder="Your Comment"
            onChange={this.onComment}
          />
          <button className="but" type="submit">
            Add Comment
          </button>
        </form>

        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
        <ul>
          <button>{commentCount}</button>
          <p>Comments</p>
          {initial.map(details => (
            <CommentItem
              key={details.id}
              information={details}
              deleteUser={this.deleteUser}
              toggleIsFavorite={this.toggleIsFavorite}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
