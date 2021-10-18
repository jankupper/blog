import React, { Component } from 'react';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

class Blog extends Component {
    constructor(props) {
        super(props);
        this.posts = this.props.posts;
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {/* First Photo Grid*/}
                < div className="w3-row-padding" >
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[0] ? this.posts[0].path : ""}</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae,
                                ultricies congue
                                gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[1] ? this.posts[1].path : ""}</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae,
                                ultricies congue
                                gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container">
                        <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[2] ? this.posts[2].path : ""}</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae,
                                ultricies congue
                                gravida diam non fringilla.</p>
                        </div>
                    </div>
                </div >
                {/* Second Photo Grid*/}
                < div className="w3-row-padding" >
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[3] ? this.posts[3].path : ""}</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae,
                                ultricies congue
                                gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[4] ? this.posts[4].path : ""}</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae,
                                ultricies congue
                                gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container">
                        <img src="./images/woods.jpg" alt="Norway" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[5] ? this.posts[5].path : ""}</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae,
                                ultricies congue
                                gravida diam non fringilla.</p>
                        </div>
                    </div>
                </div >
                {/* Pagination */}
                < div className="w3-center w3-padding-32" >
                    <div className="w3-bar">
                        <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
                        <a href="#" className="w3-bar-item w3-black w3-button">1</a>
                        <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
                        <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
                        <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
                        <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
                    </div>
                </div >
            </div >
        );
    }
}

export default Blog;