
import React, { Component } from 'react'

class App extends Component {

  state = {
    large: false,
  };

  toggle = () => this.setState((prevState) => ({ large: !prevState.large }));

  render() {
    const { large } = this.state
    return (
      <div
        onClick={() => this.toggle()}
        style={{ fontSize: large ? 72 : 22, cursor: 'pointer' }}
      >
        webpack-react-static-site-boilerplate (click me)
      </div>
    )
  }
}

export default App
