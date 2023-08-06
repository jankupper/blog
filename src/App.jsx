import React, { Component, useEffect, useState } from 'react';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import BlogEntry from './Components/BlogEntry';
import Impressum from './Components/Impressum';
// import Toast from './Components/Toast';
// import Cart from './Components/Cart';
import {
    useNavigate,
} from 'react-router-dom';
import { Link } from 'react-router-dom';

//import './Components/App.css';
import './Components/w3.css';

function App(props) {
    const [nav, setNav] = useState("none");
    const [inspiration, setInspiration] = useState([]);
    const [posts, setPosts] = useState([]);

    // Warenkorb beim Laden der Seite aus dem Local Storage wiederherstellen
    // React.useEffect(() => {
    //     const savedWarenkorb = localStorage.getItem('warenkorb');
    //     if (savedWarenkorb) {
    //         setWarenkorb(JSON.parse(savedWarenkorb));
    //     }
    // }, []);

    React.useEffect(() => {
        getText();
    }, []);

    function getText() {
        fetch(`${window.location.origin}/content/content.json`).then(res => res.json()).then(content => {
            setInspiration(content.inspiration);
            setPosts(content.posts);
        });
    }
    
    function navOpen() {
        setNav("block");
    }
    
    function  navClose() {
        setNav("none" );
    }
    
    function  navHandle(page) {
        setNav(false);
    }

    return (
        <BrowserRouter>
        <div className="App">
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="w3-light-grey w3-content" style={{ maxWidth: '1600px' }}>

            {/* Sidebar/menu */}
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: '300px', display: nav }} id="mySidebar"><br />
                <div className="w3-container">
                {/* <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
            title="close menu">
            <i class="fa fa-remove"></i>
        </a>
        <img src="/w3images/avatar_g2.jpg" style="width:45%;" class="w3-round"><br><br> */}
                <h4><b>PORTFOLIO</b></h4>
                </div>
                <div className="w3-bar-block">
                <Link to="/" className="w3-bar-item w3-button w3-padding"><i className="fa fa-th-large fa-fw w3-margin-right" />HOME</Link>
                <Link to="/blog" className="w3-bar-item w3-button w3-padding"><i className="fa fa-user fa-fw w3-margin-right" />BLOG</Link>
                {/* <a onClick={() => navHandle("home")} className={"w3-bar-item w3-button w3-padding" + ((page == "home") ? " w3-text-teal" : "")}><i className="fa fa-th-large fa-fw w3-margin-right" />HOME</a>
                <a onClick={() => navHandle("blog")} className={"w3-bar-item w3-button w3-padding" + ((page == "blog") ? " w3-text-teal" : "")}><i className="fa fa-user fa-fw w3-margin-right" />BLOG</a> */}
                <a href="#contact" onClick={() => navHandle("contact")} className="w3-bar-item w3-button w3-padding"><i className="fa fa-envelope fa-fw w3-margin-right" />CONTACT</a>
                </div>
                <div className="w3-panel w3-large">
                <i className="fa fa-facebook-official w3-hover-opacity" />
                <i className="fa fa-instagram w3-hover-opacity" />
                {/* <i className="fa fa-snapchat w3-hover-opacity" />
                <i className="fa fa-pinterest-p w3-hover-opacity" />
                <i className="fa fa-twitter w3-hover-opacity" />
                <i className="fa fa-linkedin w3-hover-opacity" /> */}
                </div>
            </nav>
            {/* Overlay effect when opening sidebar on small screens */}
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={() => navClose()} style={{ cursor: 'pointer', display: nav }} title="close side menu" id="myOverlay" />

            {/* !PAGE CONTENT! */}
            <div className="w3-main" style={{ marginLeft: '300px' }}>
                {/* Header */}
                <header>
                <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={() => navOpen()}><i className="fa fa-bars" /></span>
                <div className="w3-container w3-center w3-padding-32">
                    <h1><b>MY WEBSITE</b></h1>
                    <p>Welcome to the blog of <span className="w3-tag">Jan Küpper</span></p>
                </div>
                </header>
                <Routes >
                    <Route exact path="/" element={<Home posts={posts} inspiration={inspiration}></Home>}></Route>
                    <Route exact path="/blog" element={<Blog posts={posts} ></ Blog>}></Route>
                    <Route exact path="/blog/:id" element={<BlogEntry posts={posts}></BlogEntry>}></Route>
                    <Route exact path="/impressum" element={<Impressum></Impressum>}></Route>
                </Routes >
                {/* Container (Contact Section) */}
                <div className="w3-content w3-container w3-padding-64" id="contact">
                <h3 className="w3-center">CONTACT ME</h3>
                <div className="w3-row w3-padding-32 w3-section">
                    {/* <div className="w3-col m4 w3-container">
                        <img src="./content/rs.png" alt="" className="w3-image w3-round" style={{ width: '100%' }} />
                    </div> */}
                    <div className="w3-col m8 w3-panel">
                        {/* <div className="w3-large w3-margin-bottom">
                            <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Remscheid, DE<br />
                            <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Phone: +00 151515<br />
                            <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right" /> Email: jan.kuepper1998@gmail.com<br />
                        </div> */}
                        {/* <p>Swing by for a cup of <i className="fa fa-coffee" />, or leave me a note:</p> */}
                        <p>leave me a note:</p>
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
                    {/* <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
                    congue
                    gravida diam non fringilla.</p> */}
                    </div>
                    <div className="w3-third">
                    <h3>BLOG POSTS</h3>
                    <ul className="w3-ul w3-hoverable">
                        <li className="w3-padding-16">
                        <img src={posts[0] ? `${window.location.origin}/${posts[0].img1200}` : ""} alt="" className="w3-left w3-margin-right" style={{ width: '70px' }} />
                        <span className="w3-large">{posts[0] ? posts[0].title : ""}</span><br />
                        <span>{posts[0] ? (posts[0].introduction).substr(0, 50) + "..." : ""}</span>
                        </li>
                        <li className="w3-padding-16">
                        <img src={posts[1] ? `${window.location.origin}/${posts[1].img1200}` : ""} alt="" className="w3-left w3-margin-right" style={{ width: '70px' }} />
                        <span className="w3-large">{posts[1] ? posts[1].title : ""}</span><br />
                        <span>{posts[1] ? (posts[1].introduction).substr(0, 50) + "..." : ""}</span>
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
                <div className="w3-black w3-center w3-padding-24"><Link to="/impressum" >IMPRESSUM</Link></div>

                {/* End page content */}
            </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;