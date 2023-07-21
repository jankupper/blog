import React, { Component, useEffect, useState  } from 'react';
import { useParams } from 'react-router';

// Jan Feb Mar Apr May Mai Jun Jul Aug Sep Oct Nov Dec

function BlogEntry(props) {
    const { id } = useParams();
    const [text, setText] = useState("");
    
    React.useEffect(() => {
        console.log(id)
        console.log(props.posts[id])
        if(props.posts[id] != undefined){
            getText(props.posts[id].path);
        }
    }, []);

    async function getText(url) {
        const res = await fetch(`${window.location.origin}/${url}`);
        const text = await res.text();
        setText(text);
    }

    return (
        <div>
            {props.posts[id] != undefined ? (
            <div className="w3-card-4 w3-margin w3-white">
                <img src={props.posts[id].img} alt="" style={{ width: '100%' }} />
                <div className="w3-container">
                <h3><b>{props.posts[id].title}</b></h3>
                <h5>{props.posts[id].description}, <span className="w3-opacity">{props.posts[id].date}</span></h5>
                </div>
                <div className="w3-container">
                {/* Inhalt */}
                <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
            ) : (
            ""
            )}
        </div>
    );
}

export default BlogEntry;