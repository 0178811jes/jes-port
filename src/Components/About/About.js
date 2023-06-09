import React from 'react';
import './About.css';
import myImage from '../../image/image/student-2.png';
import Navbar from '../Home/Navbar/Navbar';

const About = () => {
    return (
        <div className="aboutus text-white">
            <Navbar></Navbar>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src={myImage} className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info mt-3">
                                                <p><span className="title-s">Name: </span> <span className="title-v">Most. Jesmin Ara</span></p>
                                                <p><span className="title-s">Email: </span> <span className="title-v">jesminara8653@gmail.com</span></p>
                                                <p><span className="title-s">Profile: </span> <span className="title-v">Frontend Developer</span></p>

                                                <p><span className="title-s">Phone: </span> <span className="title-v">+8801788118653</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <h2 className="mt-4 text-uppercase">Skill</h2>
                                        <span className='text-white'>HTML</span> <span className="pull-right text-white">90%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                        <span className='text-white'>CSS</span> <span className="pull-right text-white">80%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                        <span className='text-white'>JAVASCRIPT</span> <span className="pull-right text-white">65%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h3 className="title-left text-uppercase">
                                                About me
                                            </h3>
                                        </div>
                                        <p className="lead" style={{ textAlign: 'justify' }}>
                                            I've been trying to learn programming for 1 years, at this time Looking back in my past, I can't find any other chapter except coding
                                        </p>
                                        <p className="lead" style={{ textAlign: 'justify' }}>
                                            I have become so involved with programming that coding has become an addiction. That's why when I finish a project at the right time, then I feel full of peace, joy, and a smile to
                                        </p>
                                        <p className="lead" style={{ textAlign: 'justify' }}>
                                            Finally,Dedicated and efficient full stack developer with 8+ months of experience in application layers, presentation layers, and databases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;