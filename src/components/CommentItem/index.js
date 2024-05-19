// Write your code here
const CommentItem = props => {
  const {information, deleteUser, toggleIsFavorite} = props
  const {id, name, comment, isFavorite} = information
  const onDelete = () => {
    deleteUser(id)
  }
  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const altvalue = isFavorite ? 'like' : 'liked'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li>
      <button></button>
      <h1>{name}</h1>
      <p>{comment}</p>
      <img src={starImgUrl} alt={altvalue} />
      <button onClick={onClickFavoriteIcon}>Like</button>

      <button testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default CommentItem
