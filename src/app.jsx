import React, { Component } from 'react';
import Home from './home';
import Blog from './blog';

class App extends Component {
  state = { posts: [] }

  componentDidMount() {
    this.get(`./content/content.json`, {}).then(posts => {
      this.setState({ posts });
    });
  }

  async get(url) {
    return await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(res => res.json());
  }


  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="./w3.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <Home></Home> */}
        <Blog></Blog>
      </div>
    );
  }
}

export default App;