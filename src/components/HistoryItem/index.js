const HistoryItem = props => {
  const {eachItem, deleteFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const deleteItem = () => {
    deleteFunction(id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={deleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
