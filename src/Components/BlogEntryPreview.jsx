import React, { Component } from 'react';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

class BlogEntryPreview extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
        this.post = this.props.post;
        this.getText(this.post.path);
    }

    componentDidMount() {
    }

    async getText(url) {
        const res = await fetch(url);
        const text = await res.text();
        this.setState({ text: text })
    }

    render() {
        return (
            <div className="w3-card-4 w3-margin w3-white">
                <img src={this.post.img} alt="" style={{ width: '100%' }} />
                <div className="w3-container">
                    <h3><b>{this.post.title}</b></h3>
                    <h5>{this.post.description}, <span className="w3-opacity">{this.post.date}</span></h5>
                </div>
                <div className="w3-container">
                    {/* Inhalt */}
                    <div dangerouslySetInnerHTML={{ __html: this.state.text.substr(0, 380) + "..." }} />
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <p><button className="w3-button w3-padding-large w3-white w3-border" onClick={() => this.props.readMore()}><b>READ MORE »</b></button></p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p><span className="w3-padding-large w3-right"><b>Comments </b> <span className="w3-tag">0</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogEntryPreview;