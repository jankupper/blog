import React, { Component } from 'react';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

class Blog extends Component {
    constructor(props) {
        super(props);
        this.posts = this.props.posts;
        this.state = { counter: 0 };
    }

    componentDidMount() {
    }

    before() {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
        }
    }

    next() {
        if (this.posts.length > ((this.state.counter + 1) * 6)) {
            this.setState({ counter: this.state.counter + 1 });
        }
    }

    handle(id) {
        this.setState({ counter: id });
    }

    bar() {
        var bar = [];
        var lim = 3;
        for (let index = 0; index < 4; index++) {
            if (this.posts.length < ((this.state.counter + index) * 6)) {
                lim = index - 1;
                break;
            }
        }

        for (let index = lim; index >= lim - 3; index--) {
            if (this.state.counter + index >= 0) {
                bar.push(<a className={"w3-bar-item w3-button w3-hover-black" + ((this.state.counter == this.state.counter + index) ? " w3-black" : "")} onClick={() => this.handle(this.state.counter + index)}>{this.state.counter + index + 1}</a>);
            }
        }

        return bar.reverse();
    }

    container() {
        var container = [];

        for (let index = 0; index < 6; index++) {
            const number = this.state.counter * 6 + index;
            if (this.posts[number]) {
                container.push(
                    <div className="w3-third w3-container w3-margin-bottom" style={{ width: "100%" }} onClick={() => this.props.readMore(number)}>
                        <img src={this.posts[number].img} alt="" style={{ width: '100%' }} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <p><b>{this.posts[number].title}</b></p>
                            <p>{this.posts[number].introduction}</p>
                        </div>
                    </div>
                );
            }
        }

        return container;
    }

    render() {
        return (
            <div>
                {/* counter Photo Grid*/}
                < div className="w3-row-padding cards">
                    {this.container()}
                </div >
                {/* Pagination */}
                < div className="w3-center w3-padding-32" >
                    <div className="w3-bar">
                        <a className="w3-bar-item w3-button w3-hover-black" onClick={() => this.before()}>«</a>
                        {this.bar()}
                        <a className="w3-bar-item w3-button w3-hover-black" onClick={() => this.next()}>»</a>
                    </div>
                </div >
            </div >
        );
    }
}

export default Blog;