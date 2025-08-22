import './index.css'
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  constructor(props) {
    super(props)

    const savedHistory = localStorage.getItem('browser_history')
    const savedDarkMode = localStorage.getItem('dark_mode') === 'true'

    let parsedHistory
    try {
      parsedHistory = JSON.parse(savedHistory)
      if (!Array.isArray(parsedHistory)) throw new Error()
    } catch {
      parsedHistory = initialHistoryList
    }

    this.state = {
      searchInput: '',
      historyList: parsedHistory,
      isDarkMode: savedDarkMode,
    }
  }

  componentDidUpdate(_, prevState) {
    const {historyList, isDarkMode} = this.state
    if (prevState.historyList !== historyList) {
      localStorage.setItem('browser_history', JSON.stringify(historyList))
    }
    if (prevState.isDarkMode !== isDarkMode) {
      localStorage.setItem('dark_mode', isDarkMode)
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updatedList})
  }

  toggleDarkMode = () => {
    this.setState(prev => ({isDarkMode: !prev.isDarkMode}))
  }

  resetHistory = () => {
    this.setState({historyList: initialHistoryList})
    localStorage.setItem('browser_history', JSON.stringify(initialHistoryList))
  }

  render() {
    const {searchInput, historyList, isDarkMode} = this.state
    const filteredList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const containerClass = isDarkMode ? 'app-container dark' : 'app-container'

    return (
      <div className={containerClass}>
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>

          <div className="controls-container">
            <div className="theme-toggle">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={this.toggleDarkMode}
                  checked={isDarkMode}
                />
                <span className="slider"></span>
              </label>
              <p className="theme-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
            </div>
            <button className="reset-btn" onClick={this.resetHistory}>
              Reset History
            </button>
          </div>
        </div>

        <ul className="history-list">
          {filteredList.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            filteredList.map(each => (
              <li className="history-item" key={each.id}>
                <p className="time">{each.timeAccessed}</p>
                <div className="info">
                  <img src={each.logoUrl} alt="domain logo" className="logo" />
                  <div className="text">
                    <p className="title">{each.title}</p>
                    <p className="url">{each.domainUrl}</p>
                  </div>
                </div>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => this.onDeleteItem(each.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                    className="delete-icon"
                  />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
