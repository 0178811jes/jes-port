import React from "react";
import './Projects.css';

import alpha1 from '../../image/mobile-phone-1917737_960_720.jpg';
import alpha2 from '../../image/mobile-phone-1917737_960_720.jpg';
import alpha3 from '../../image/mobile-phone-1917737_960_720.jpg';

import traveller1 from '../../image/car-49278__340.webp';
import traveller2 from '../../image/car-49278__340.webp';
import traveller3 from '../../image/car-49278__340.webp';


import doctors1 from '../../image/code.png';
import doctors2 from '../../image/code.png';
import doctors3 from '../../image/code.png';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Projects = () => {

    return (
        <div className="Projects text-white">
            <h1 className="text-center mt-5 pt-5" >PROJECTS DETAILS</h1>
            <div className="my-5 ml-5">
                <h2 className="">(i) Social – Media website (Mern Stack)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={alpha1} alt="" /></Slide>
                            <Slide index={0}><img src={alpha3} alt="" /></Slide>
                            <Slide index={1}><img src={alpha2} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Features:</h5>
                <ul>
                    
                    <li>
                        I use private Route.
                    </li>
                    
                    <li>
                        I use firebase for user authentication.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Bootstrap5, React Bootstrap,Css, Html</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://social-media-ccb1c.firebaseapp.com/">Live Site</a>
                    ||
                    <a href="https://github.com/0178811jes/social-media">Repo Link</a>
                    ||
                    
                </h5>
            </div>



            <div className="my-5 ml-5">
                <h2 className="">(ii) Genious – Car website (Mern Stack)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={traveller1} alt="" /></Slide>
                            <Slide index={0}><img src={traveller2} alt="" /></Slide>
                            <Slide index={1}><img src={traveller3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Features:</h5>
                <ul>
                    <li>
                        A complete responsive parces for car website where a user can book any car.
                    </li>
                    
                    
                    <li>
                        I use mongodb for storing data.
                    </li>
                    <li>
                        I use firebase for user authentication.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Bootstrap5, React Bootstrap,Css, Html</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href=" https://genious-car-e56b4.firebaseapp.com//">Live Site</a>
                    ||
                    <a href="https://github.com/0178811jes/car-resource-client">Client Side</a>
                    ||
                    <a href="https://github.com/0178811jes/car-resource-server">Server Side</a>
                </h5>
            </div>
            <div className="my-5 ml-5">
                <h2 className="">(iii) CoderStackbox – online code compiler (Frontend)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={doctors1} alt="" /></Slide>
                            <Slide index={0}><img src={doctors2} alt="" /></Slide>
                            <Slide index={1}><img src={doctors3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Features:</h5>
                <ul>
                    <li>
                        A coderStackbox website where a user can see detail info about a Code editor.
                    </li>
                    <li>
                        Some routes are private. Only logged-in users have the access to visit.
                    </li>
                    <li>
                        Two types of login or signup methods are implemented.
                    </li>
                    <li>
                        I use some css library to make the site responsive and add some animations
                    </li>
                    <li>
                        I use firebase for user authentication.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">ReactJS, React-router-dom, Tailwind CSS, ReduxJS, Firebase-Authentication system, Monaco-Editor, Framer-Motion, Mongoose, NodeJS, ExpressJS.</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://codersstackbox-c9449.web.app/">Live Site</a>
                    ||
                    <a href="https://github.com/xbayazid/coderstackbox">Client Side</a>
                    <a href="https://github.com/xbayazid/coderstackbox-server">Server Side</a>
                </h5>
            </div>
        </div>

    );
};

export default Projects;