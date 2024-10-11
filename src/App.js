import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    editAgain: false,
    content: '',
  }

  toggleOption = () => {
    this.setState(prevState => ({editAgain: !prevState.editAgain}))
  }

  changeContent = event => {
    this.setState({content: event.target.value})
  }

  getElements = () => {
    const {editAgain, content} = this.state
    if (editAgain === false) {
      return (
        <div>
          <input
            type="text"
            onChange={this.changeContent}
            value={content}
            className="paragraph"
          />
          <button
            type="button"
            onClick={this.toggleOption}
            className="button-styling"
          >
            Save
          </button>
        </div>
      )
    }
    return (
      <div className="paragraph-container">
        <p className="paragraph">{content}</p>
        <button
          type="button"
          onClick={this.toggleOption}
          className="button-styling"
        >
          Edit
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          {this.getElements()}
        </div>
      </div>
    )
  }
}
export default App
