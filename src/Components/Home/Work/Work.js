import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// full stack
import img1 from '../../../image/mobile-phone-1917737_960_720.jpg';
import img2 from '../../../image/car-49278__340.webp';
import img3 from '../../../image/code.png';




import { Link } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white mb-5 " > MY PROJECTS</h1>
            <div className="card-deck pb-5">
                <div className="card img-hover-zoom">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Social Media</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://social-media-ccb1c.firebaseapp.com/
" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>

                <div className="card img-hover-zoom">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">GENIOUS CAR</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://genious-car-e56b4.firebaseapp.com/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
                <div className="card img-hover-zoom">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">CoderStackbox-online code compiler</h5>
                        <Link to="/project"><button className="card-text btn btn-primary">More Details</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href=" https://codersstackbox-c9449.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;