import React, { Component } from 'react';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

class Home extends Component {
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

  // Script to open and close sidebar
  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }


  render() {
    console.log(this.state.posts);
    // <h1>Posts</h1>
    //         {this.state.posts.map(posts =>
    //             <div>{posts.path}</div>
    //         )}
    return (
      <div className="w3-light-grey w3-content" style={{ maxWidth: '1600px' }}>
        {/* Sidebar/menu */}
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: '300px' }} id="mySidebar"><br />
          <div className="w3-container">
            {/* <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
                      title="close menu">
                      <i class="fa fa-remove"></i>
                    </a>
                    <img src="/w3images/avatar_g2.jpg" style="width:45%;" class="w3-round"><br><br> */}
            <h4><b>PORTFOLIO</b></h4>
            <p className="w3-text-grey">Template by W3.CSS</p>
          </div>
          <div className="w3-bar-block">
            <a href="./index.html" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className="fa fa-th-large fa-fw w3-margin-right" />HOME</a>
            <a href="./blog.html" onclick="w3_close()" className="w3-bar-item w3-button w3-padding"><i className="fa fa-user fa-fw w3-margin-right" />BLOG</a>
            <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding"><i className="fa fa-envelope fa-fw w3-margin-right" />CONTACT</a>
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
        <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
        {/* !PAGE CONTENT! */}
        <div className="w3-main" style={{ marginLeft: '300px' }}>
          {/* Header */}
          <header>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i className="fa fa-bars" /></span>
            <div className="w3-container w3-center w3-padding-32">
              <h1><b>MY WEBSITE</b></h1>
              <p>Welcome to the blog of <span className="w3-tag">Jan Küpper</span></p>
            </div>
          </header>
          {/* Grid */}
          <div className="w3-row">
            {/* Blog entries */}
            <div className="w3-col l8 s12">
              {/* Blog entry */}
              <div className="w3-card-4 w3-margin w3-white">
                <img src="./images/woods.jpg" alt="Nature" style={{ width: '100%' }} />
                <div className="w3-container">
                  <h3><b>{this.state.posts[0] ? this.state.posts[0].path : ""}</b></h3>
                  <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
                </div>
                <div className="w3-container">
                  <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
                    placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                    congue ullam corper. Praesent tincidunt sed
                    tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                    fringilla.</p>
                  <div className="w3-row">
                    <div className="w3-col m8 s12">
                      <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                      <p><span className="w3-padding-large w3-right"><b>Comments </b> <span className="w3-tag">0</span></span></p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* Blog entry */}
              <div className="w3-card-4 w3-margin w3-white">
                <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} />
                <div className="w3-container">
                  <h3><b>{this.state.posts[1] ? this.state.posts[1].path : ""}</b></h3>
                  <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
                </div>
                <div className="w3-container">
                  <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
                    placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                    congue ullam corper. Praesent tincidunt sed
                    tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                    fringilla.</p>
                  <div className="w3-row">
                    <div className="w3-col m8 s12">
                      <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                      <p><span className="w3-padding-large w3-right"><b>Comments </b> <span className="w3-badge">2</span></span></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END BLOG ENTRIES */}
            </div>
            {/* Introduction menu */}
            <div className="w3-col l4">
              {/* About Card */}
              <div className="w3-card w3-margin w3-margin-top">
                <img src="/w3images/avatar_g.jpg" style={{ width: '100%' }} />
                <div className="w3-container w3-white">
                  <h4><b>My Name</b></h4>
                  <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of
                    lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                </div>
              </div>
              <hr />
              {/* Posts */}
              <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                  <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                  <li className="w3-padding-16">
                    <img src="/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Lorem</span><br />
                    <span>Sed mattis nunc</span>
                  </li>
                  <li className="w3-padding-16">
                    <img src="/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Ipsum</span><br />
                    <span>Praes tinci sed</span>
                  </li>
                  <li className="w3-padding-16">
                    <img src="/w3images/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Dorum</span><br />
                    <span>Ultricies congue</span>
                  </li>
                  <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                    <img src="/w3images/rock.jpg" alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Mingsum</span><br />
                    <span>Lorem ipsum dipsum</span>
                  </li>
                </ul>
              </div>
              <hr />
              {/* Labels / tags
                      <div class="w3-card w3-margin">
                        <div class="w3-container w3-padding">
                          <h4>Tags</h4>
                        </div>
                        <div class="w3-container w3-white">
                          <p><span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span
                              class="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                          </p>
                        </div>
                      </div> */}
              {/* Inspiration */}
              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Inspiration</h4>
                </div>
                <div className="w3-row-padding w3-white">
                  <div className="w3-col s6">
                    <p><img src="/w3images/jeans.jpg" alt="Jeans" style={{ width: '100%' }} /></p>
                    <p><img src="/w3images/team1.jpg" alt="Jeans" style={{ width: '100%' }} /></p>
                  </div>
                  <div className="w3-col s6">
                    <p><img src="/w3images/avatar_hat.jpg" alt="Men in Hats" style={{ width: '100%' }} className="w3-grayscale" /></p>
                    <p><img src="/w3images/team4.jpg" alt="Jeans" style={{ width: '100%' }} /></p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w3-white w3-margin">
                <div className="w3-container w3-padding w3-black">
                  <h4>Follow Me</h4>
                </div>
                <div className="w3-container w3-xlarge w3-padding">
                  <i className="fa fa-facebook-official w3-hover-opacity" />
                  <i className="fa fa-instagram w3-hover-opacity" />
                  <i className="fa fa-snapchat w3-hover-opacity" />
                  <i className="fa fa-pinterest-p w3-hover-opacity" />
                  <i className="fa fa-twitter w3-hover-opacity" />
                  <i className="fa fa-linkedin w3-hover-opacity" />
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* Images of Me */}
          {/* <div class="w3-row-padding w3-padding-16" id="about">
                    <div class="w3-col m6">
                      <img src="./images/woods.jpg" alt="Me" style="width:100%">
                    </div>
                    <div class="w3-col m6">
                      <img src="./images/woods.jpg" alt="Me" style="width:100%">
                    </div>
                  </div> */}
          {/* <div class="w3-container w3-padding-large" style="margin-bottom:32px">
                    <h4><b>About Me</b></h4>
                    <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem
                      ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum.
                      Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent
                      tincidunt
                      sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                      fringilla.</p>
                    <hr>
                    <h4>Technical Skills</h4> */}
          {/* Progress bars / Skills */}
          {/* <p>Photography</p>
                    <div class="w3-grey">
                      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:95%">95%</div>
                    </div>
                    <p>Web Design</p>
                    <div class="w3-grey">
                      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:85%">85%</div>
                    </div>
                    <p>Photoshop</p>
                    <div class="w3-grey">
                      <div class="w3-container w3-dark-grey w3-padding w3-center" style="width:80%">80%</div>
                    </div>
                    <p>
                      <button class="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
                        <i class="fa fa-download w3-margin-right"></i>Download Resume
                      </button>
                    </p>
                    <hr> */}
          {/* <h4>How much I charge</h4> */}
          {/* Pricing Tables */}
          {/* <div class="w3-row-padding" style="margin:0 -16px">
                      <div class="w3-third w3-margin-bottom">
                        <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                          <li class="w3-black w3-xlarge w3-padding-32">Basic</li>
                          <li class="w3-padding-16">Web Design</li>
                          <li class="w3-padding-16">Photography</li>
                          <li class="w3-padding-16">1GB Storage</li>
                          <li class="w3-padding-16">Mail Support</li>
                          <li class="w3-padding-16">
                            <h2>$ 10</h2>
                            <span class="w3-opacity">per month</span>
                          </li>
                          <li class="w3-light-grey w3-padding-24">
                            <button class="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                          </li>
                        </ul>
                      </div>
                      <div class="w3-third w3-margin-bottom">
                        <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                          <li class="w3-teal w3-xlarge w3-padding-32">Pro</li>
                          <li class="w3-padding-16">Web Design</li>
                          <li class="w3-padding-16">Photography</li>
                          <li class="w3-padding-16">50GB Storage</li>
                          <li class="w3-padding-16">Endless Support</li>
                          <li class="w3-padding-16">
                            <h2>$ 25</h2>
                            <span class="w3-opacity">per month</span>
                          </li>
                          <li class="w3-light-grey w3-padding-24">
                            <button class="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                          </li>
                        </ul>
                      </div>
                      <div class="w3-third">
                        <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                          <li class="w3-black w3-xlarge w3-padding-32">Premium</li>
                          <li class="w3-padding-16">Web Design</li>
                          <li class="w3-padding-16">Photography</li>
                          <li class="w3-padding-16">Unlimited Storage</li>
                          <li class="w3-padding-16">Endless Support</li>
                          <li class="w3-padding-16">
                            <h2>$ 25</h2>
                            <span class="w3-opacity">per month</span>
                          </li>
                          <li class="w3-light-grey w3-padding-24">
                            <button class="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                          </li>
                        </ul>
                      </div>
                    </div> */}
          {/* </div> */}
          {/* Contact Section */}
          {/* <div class="w3-container w3-padding-large w3-grey">
                    <h4 id="contact"><b>Contact Me</b></h4>
                    <div class="w3-row-padding w3-center w3-padding-24" style="margin:0 -16px">
                      <div class="w3-third w3-dark-grey">
                        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                        <p>email@email.com</p>
                      </div>
                      <div class="w3-third w3-teal">
                        <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
                        <p>Chicago, US</p>
                      </div>
                      <div class="w3-third w3-dark-grey">
                        <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
                        <p>512312311</p>
                      </div>
                    </div>
                    <hr class="w3-opacity">
                    <form action="/action_page.php" target="_blank">
                      <div class="w3-section">
                        <label>Name</label>
                        <input class="w3-input w3-border" type="text" name="Name" required>
                      </div>
                      <div class="w3-section">
                        <label>Email</label>
                        <input class="w3-input w3-border" type="text" name="Email" required>
                      </div>
                      <div class="w3-section">
                        <label>Message</label>
                        <input class="w3-input w3-border" type="text" name="Message" required>
                      </div>
                      <button type="submit" class="w3-button w3-black w3-margin-bottom"><i
                          class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
                    </form>
                  </div> */}
          {/* Container (Contact Section) */}
          <div className="w3-content w3-container w3-padding-64" id="contact">
            <h3 className="w3-center">CONTACT ME</h3>
            <p className="w3-center"><em>I'd love your feedback!</em></p>
            <div className="w3-row w3-padding-32 w3-section">
              <div className="w3-col m4 w3-container">
                <img src="/w3images/map.jpg" className="w3-image w3-round" style={{ width: '100%' }} />
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
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
              </div>
              <div className="w3-third">
                <h3>BLOG POSTS</h3>
                <ul className="w3-ul w3-hoverable">
                  <li className="w3-padding-16">
                    <img src="./images/woods.jpg" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Lorem</span><br />
                    <span>Sed mattis nunc</span>
                  </li>
                  <li className="w3-padding-16">
                    <img src="./images/woods.jpg" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    <span className="w3-large">Ipsum</span><br />
                    <span>Praes tinci sed</span>
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
    );
  }
}

export default Home;