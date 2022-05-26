import React, { Component } from 'react';
import BlogEntryPreview from './blogEntryPreview';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = this.props.state;
  }

  popularPost() {
    var popularPost = [];

    for (let index = 0; index < 4; index++) {
      if (this.state.posts[index]) {
        popularPost.push(
          <li className="w3-padding-16">
            <img src={this.state.posts[index].img1200} alt="" className="w3-left w3-margin-right" style={{ width: '70px' }} />
            <span className="w3-large">{this.state.posts[index].title}</span><br />
            <span>{(this.state.posts[index].introduction).substr(0, 50) + "..."}</span>
          </li>
        );
      }
    }

    return popularPost;
  }

  render() {
    return (
      <div>
        {/* Grid */}
        <div className="w3-row">
          {/* Blog entries */}
          <div className="w3-col l8 s12">
            {/* Blog entry */}
            <BlogEntryPreview post={this.state.posts[0] ? this.state.posts[0] : []} readMore={() => this.props.readMore(0)}></BlogEntryPreview>
            <hr />
            {/* Blog entry */}
            <BlogEntryPreview post={this.state.posts[1] ? this.state.posts[1] : []} readMore={() => this.props.readMore(1)}></BlogEntryPreview>
            {/* END BLOG ENTRIES */}
          </div>
          {/* Introduction menu */}
          <div className="w3-col l4">
            {/* About Card
            <div className="w3-card w3-margin w3-margin-top">
              <img src="./content/nn.jpeg" alt="" style={{ width: '100%' }} />
              <div className="w3-container w3-white">
                <h4><b>My Name</b></h4>
                <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of
                  lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
              </div>
            </div>
            <hr /> */}
            {/* Posts */}
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Popular Posts</h4>
              </div>
              <ul className="w3-ul w3-hoverable w3-white">
                {this.popularPost()}
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
                  <p><img src={this.state.inspiration[0] ? this.state.inspiration[0] : ""} alt="" style={{ width: '100%' }} /></p>
                  <p><img src={this.state.inspiration[1] ? this.state.inspiration[1] : ""} alt="" style={{ width: '100%' }} /></p>
                </div>
                <div className="w3-col s6">
                  <p><img src={this.state.inspiration[2] ? this.state.inspiration[2] : ""} alt="" style={{ width: '100%' }} /></p>
                  {/* className="w3-grayscale" */}
                  <p><img src={this.state.inspiration[2] ? this.state.inspiration[3] : ""} alt="" style={{ width: '100%' }} /></p>
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
                {/* <i className="fa fa-snapchat w3-hover-opacity" />
                <i className="fa fa-pinterest-p w3-hover-opacity" />
                <i className="fa fa-twitter w3-hover-opacity" />
                <i className="fa fa-linkedin w3-hover-opacity" /> */}
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
      </div>
    );
  }
}

export default Home;