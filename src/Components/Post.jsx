import React, { Component, useEffect, useState } from 'react';

function Post(props) {
    const [text, setText] = useState(0);
    
    React.useEffect(() => {
        fetch(`./content/content.json`).then(res => res.json()).then(content => {
            getText(props.post.path);
        });
    }, []);

    async function getText(url) {
        const res = await fetch(url);
        const text = await res.text();
        setText(text);
    }

    return (
        <div className="w3-card-4 w3-margin w3-white">
            <img src={props.post.img} alt="" style={{ width: '100%' }} />
            <div className="w3-container">
                <h3><b>{props.post.title}</b></h3>
                <h5>{props.post.description}, <span className="w3-opacity">{props.post.date}</span></h5>
            </div>
            <div className="w3-container">
                {/* Inhalt */}
                <div dangerouslySetInnerHTML={{ __html: text }} />
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
    );
}

export default Post;