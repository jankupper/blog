import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

function Blog(props) {
    const [counter, setCounter] = useState(0);

    function before() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function next() {
        if (props.posts.length > ((counter + 1) * 6)) {
            setCounter(counter + 1 );
        }
    }

    function handle(id) {
        setCounter(id);
    }

    function bar() {
        var bar = [];
        var lim = 3;
        for (let index = 0; index < 4; index++) {
            if (props.posts.length < ((counter + index) * 6)) {
                lim = index - 1;
                break;
            }
        }

        for (let index = lim; index >= lim - 3; index--) {
            if (counter + index >= 0) {
                bar.push(<a className={"w3-bar-item w3-button w3-hover-black" + ((counter == counter + index) ? " w3-black" : "")} onClick={() => handle(counter + index)}>{counter + index + 1}</a>);
            }
        }

        return bar.reverse();
    }

    function container() {
        var container = [];

        for (let index = 0; index < 6; index++) {
            const number = counter * 6 + index;
            if (props.posts[number]) {
                container.push(
                    <Link to={`/blog/${number}`} className="nav-link">
                        <div className="w3-third w3-container w3-margin-bottom" style={{ width: "100%" }}>
                            <img src={props.posts[number].img} alt="" style={{ width: '100%' }} className="w3-hover-opacity" />
                            <div className="w3-container w3-white">
                                <p><b>{props.posts[number].title}</b></p>
                                <p>{props.posts[number].introduction}</p>
                            </div>
                        </div>
                    </Link>
                );
            }
        }

        return container;
    }

    return (
        <div>
            {/* counter Photo Grid*/}
            < div className="w3-row-padding cards">
                {container()}
            </div >
            {/* Pagination */}
            < div className="w3-center w3-padding-32" >
                <div className="w3-bar">
                    <a className="w3-bar-item w3-button w3-hover-black" onClick={() => before()}>«</a>
                    {bar()}
                    <a className="w3-bar-item w3-button w3-hover-black" onClick={() => next()}>»</a>
                </div>
            </div >
        </div >
    );
}

export default Blog;