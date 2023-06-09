import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (

        <div className=" navSectio">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
                <div className="container">
                    <a style={{ color: "#111430" }} className="navbar-brand  btn btn-light text-dark" href="https://docs.google.com/document/d/1T1VXmVKatLVB17bbVq5JjsIfJt5uLlAe9Ggfs3T13mQ/edit?usp=sharing" target="-blank">Download Resume</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item  ">
                                <Link to="/Home" className="nav-link " >Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/work" className="nav-link" >Project</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link" >Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Navbar;
