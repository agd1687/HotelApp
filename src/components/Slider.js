import React from 'react';
import {Link} from 'react-router-dom';
import image1 from '../images/details-1.jpeg';
import image2 from '../images/details-2.jpeg';
import image3 from '../images/details-3.jpeg';
import image4 from '../images/details-4.jpeg';

export default function Slider({title, description, buttonLabel, buttonURL}){
    return(
        <section className="container">
            <div className="row">
                <div className="col-8 px-0">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={image4} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4 bg-secondary px-0 d-flex justify-content-center">
                    <div className="jumbotron py-5 m-2">
                        <h1>{title}</h1>
                        <p className="lead ">{description}</p>
                        <Link className="btn btn-primary btn-lg" to={buttonURL} role="button">{buttonLabel}</Link>
                    </div>
                </div>
            </div>

        </section>
    
    );
}