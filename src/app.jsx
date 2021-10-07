import React, { Component } from 'react';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

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
        <h1>Posts</h1>
        {this.state.posts.map(posts =>
          <div>{posts.path}</div>
        )}


      </div>
    );
  }
}

export default App;