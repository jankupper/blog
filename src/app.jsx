import React, { Component } from 'react';
import Home from './home';
import Blog from './blog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      nav: "none",
      inspiration: [],
      posts: []
    }
  }

  async componentDidMount() {
    const content = await fetch(`./content/content.json`).then(res => res.json());
    console.log(content)
    this.setState({ inspiration: content.inspiration });
    this.setState({ posts: content.posts });
  }

  navOpen() {
    this.setState({ nav: "block" });
  }

  navClose() {
    this.setState({ nav: "none" });
  }

  navHandle(page) {
    this.state.nav = false;
    this.state.page = page;
    this.setState(this.state);
  }

  main() {
    if (this.state.posts.length) {
      switch (this.state.page) {
        case "blog":
          return <Blog posts={this.state.posts}></Blog>
          break;
        // case "bla":
        //   return <Blog></Blog>
        //   break;
        default:
          return <Home inspiration={this.state.inspiration} posts={this.state.posts}></Home>
          break;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div className="w3-light-grey w3-content" style={{ maxWidth: '1600px' }}>

          {/* Sidebar/menu */}
          <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: '300px', display: this.state.nav }} id="mySidebar"><br />
            <div className="w3-container">
              {/* <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
          title="close menu">
          <i class="fa fa-remove"></i>
        </a>
        <img src="/w3images/avatar_g2.jpg" style="width:45%;" class="w3-round"><br><br> */}
              <h4><b>PORTFOLIO</b></h4>
            </div>
            <div className="w3-bar-block">
              <a onClick={() => this.navHandle("home")} className={"w3-bar-item w3-button w3-padding" + ((this.state.page == "home") ? " w3-text-teal" : "")}><i className="fa fa-th-large fa-fw w3-margin-right" />HOME</a>
              <a onClick={() => this.navHandle("blog")} className={"w3-bar-item w3-button w3-padding" + ((this.state.page == "blog") ? " w3-text-teal" : "")}><i className="fa fa-user fa-fw w3-margin-right" />BLOG</a>
              <a href="#contact" onClick={() => this.navHandle("contact")} className="w3-bar-item w3-button w3-padding"><i className="fa fa-envelope fa-fw w3-margin-right" />CONTACT</a>
            </div>
            <div className="w3-panel w3-large">
              <i className="fa fa-facebook-official w3-hover-opacity" />
              <i className="fa fa-instagram w3-hover-opacity" />
              <i className="fa fa-snapchat w3-hover-opacity" />
              <i className="fa fa-pinterest-p w3-hover-opacity" />
              <i className="fa fa-twitter w3-hover-opacity" />
              <i className="fa fa-linkedin w3-hover-opacity" />
            </div>
          </nav>
          {/* Overlay effect when opening sidebar on small screens */}
          <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={() => this.navClose()} style={{ cursor: 'pointer', display: this.state.nav }} title="close side menu" id="myOverlay" />

          {/* !PAGE CONTENT! */}
          <div className="w3-main" style={{ marginLeft: '300px' }}>
            {/* Header */}
            <header>
              <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={() => this.navOpen()}><i className="fa fa-bars" /></span>
              <div className="w3-container w3-center w3-padding-32">
                <h1><b>MY WEBSITE</b></h1>
                <p>Welcome to the blog of <span className="w3-tag">Jan Küpper</span></p>
              </div>
            </header>

            {this.main()}

            {/* Container (Contact Section) */}
            <div className="w3-content w3-container w3-padding-64" id="contact">
              <h3 className="w3-center">CONTACT ME</h3>
              <p className="w3-center"><em>I'd love your feedback!</em></p>
              <div className="w3-row w3-padding-32 w3-section">
                <div className="w3-col m4 w3-container">
                  <img src="./content/rs.png" alt="" className="w3-image w3-round" style={{ width: '100%' }} />
                </div>
                <div className="w3-col m8 w3-panel">
                  <div className="w3-large w3-margin-bottom">
                    <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Chicago, US<br />
                    <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Phone: +00 151515<br />
                    <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Email: mail@mail.com<br />
                  </div>
                  <p>Swing by for a cup of <i className="fa fa-coffee" />, or leave me a note:</p>
                  <form action="/action_page.php" target="_blank">
                    <div className="w3-row-padding" style={{ margin: '0 -16px 8px -16px' }}>
                      <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                      </div>
                      <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                      </div>
                    </div>
                    <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                    <button className="w3-button w3-black w3-right w3-section" type="submit">
                      <i className="fa fa-paper-plane" /> SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="w3-container w3-padding-32 w3-dark-grey">
              <div className="w3-row-padding">
                <div className="w3-third">
                  <h3>FOOTER</h3>
                  <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
                    congue
                    gravida diam non fringilla.</p>
                </div>
                <div className="w3-third">
                  <h3>BLOG POSTS</h3>
                  <ul className="w3-ul w3-hoverable">
                    <li className="w3-padding-16">
                      <img src={this.state.posts[0] ? this.state.posts[0].img : ""} alt="" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                      <span className="w3-large">{this.state.posts[0] ? this.state.posts[0].title : ""}</span><br />
                      <span>{this.state.posts[0] ? (this.state.posts[0].introduction).substr(0, 50) + "..." : ""}</span>
                    </li>
                    <li className="w3-padding-16">
                      <img src={this.state.posts[1] ? this.state.posts[1].img : ""} alt="" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                      <span className="w3-large">{this.state.posts[1] ? this.state.posts[1].title : ""}</span><br />
                      <span>{this.state.posts[1] ? (this.state.posts[1].introduction).substr(0, 50) + "..." : ""}</span>
                    </li>
                  </ul>
                </div>
                <div className="w3-third">
                  <h3>POPULAR TAGS</h3>
                  <p>
                    <span className="w3-tag w3-grey w3-margin-bottom">Travel</span> <span className="w3-tag w3-grey w3-margin-bottom">New York</span> <span className="w3-tag w3-grey w3-margin-bottom">London</span>
                    <span className="w3-tag w3-grey w3-margin-bottom">IKEA</span> <span className="w3-tag w3-grey w3-margin-bottom">NORWAY</span> <span className="w3-tag w3-grey w3-margin-bottom">DIY</span>
                    <span className="w3-tag w3-grey w3-margin-bottom">Ideas</span> <span className="w3-tag w3-grey w3-margin-bottom">Baby</span> <span className="w3-tag w3-grey w3-margin-bottom">Family</span>
                    <span className="w3-tag w3-grey w3-margin-bottom">News</span> <span className="w3-tag w3-grey w3-margin-bottom">Clothing</span> <span className="w3-tag w3-grey w3-margin-bottom">Shopping</span>
                    <span className="w3-tag w3-grey w3-margin-bottom">Sports</span> <span className="w3-tag w3-grey w3-margin-bottom">Games</span>
                  </p>
                </div>
              </div>
            </footer>
            <div className="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-opacity">w3.css</a></div>
            {/* End page content */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;