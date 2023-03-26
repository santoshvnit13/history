import {Component} from 'react'

import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {
    value: '',
    modifiedList: [],
    counter: 0,
  }

  item = event => {
    this.setState({value: event.target.value})
  }

  deleteFunction = id => {
    const {initialHistoryList} = this.props

    const filteredList = initialHistoryList.filter(
      uniqueItem => uniqueItem.id !== id,
    )
    this.setState(prevState => ({
      modifiedList: filteredList,
      counter: prevState.counter + 1,
    }))
  }

  render() {
    const {initialHistoryList} = this.props
    const {value, modifiedList, counter} = this.state

    const searchList = initialHistoryList.filter(listItem =>
      listItem.title.toLowerCase().includes(value),
    )

    const searchList1 = modifiedList.filter(listItem =>
      listItem.title.toLowerCase().includes(value),
    )

    return (
      <>
        {searchList === [] && (
          <>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt=" search"
              />
              <input
                type="search"
                placeholder="Search history"
                onChange={this.item}
                value={value}
              />
            </div>
            <p>There is no history to show</p>
          </>
        )}
        {counter === 0 ? (
          <>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt=" search"
              />
              <input
                type="search"
                placeholder="Search history"
                onChange={this.item}
                value={value}
              />
            </div>
            <ul>
              {searchList.map(eachItem => (
                <HistoryItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  deleteFunction={this.deleteFunction}
                />
              ))}
            </ul>
          </>
        ) : (
          <>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt=" search"
              />
              <input
                type="search"
                placeholder="Search history"
                onChange={this.item}
                value={value}
              />
            </div>
            <ul>
              {searchList1.map(eachItem => (
                <HistoryItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  deleteFunction={this.deleteFunction}
                />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}

export default BrowserHistory
