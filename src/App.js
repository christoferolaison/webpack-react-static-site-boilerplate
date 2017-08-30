
import React, { Component } from 'react'

class App extends Component {

  state = {
    images: [
      'https://images.unsplash.com/photo-1469715492424-1192d1e15221?dpr=1&auto=format&fit=crop&w=767&h=432&q=80&cs=tinysrgb&crop=',
      'https://images.unsplash.com/photo-1469721492384-bf51ab0a0a59?dpr=2&auto=format&fit=crop&w=1199&h=675&q=80&cs=tinysrgb&crop='
    ],
    selected: 0,
  };

  changeImage = () => this.setState((prevState) => ({ selected: prevState.selected === 0 ? 1 : 0 }));

  render() {
    const { selected, images } = this.state
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '90vh',
          maxWidth: 620,
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          lineHeight: 1.5,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          webpack-react-static-site-boilerplate
        </h1>
        <p
          style={{ fontSize: 18 }}
        >
          A boilerplate for creating static web apps with React. It uses webpack for bundling and Github Pages for simple deploys.</p>
        <img
          onClick={() => this.changeImage()}
          style={{ maxWidth: 400, cursor: 'pointer' }}
          src={images[selected]}
        />
        <p>Made by <a style={{ color: '#793F7D', textDecoration: 'none' }} href="https://twitter.com/tossetosse">@tossetosse</a>.</p>
      </div>
    )
  }
}

export default App
