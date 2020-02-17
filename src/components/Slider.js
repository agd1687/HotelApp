import React from 'react';
import {Link} from 'react-router-dom';
import image1 from '../images/details-1.jpeg';
import image2 from '../images/details-2.jpeg';
import image3 from '../images/details-3.jpeg';
import image4 from '../images/details-4.jpeg';
import {SliderContext} from '../SliderContext';



export default class Slider extends React.Component{

    componentDidMount(){
        const {sliderDataToggle} = this.context ;
        sliderDataToggle(this.props.infoType);
    }

    render(){

        return(
            <SliderContext.Consumer>
                {({title, description, labelButton, urlButton}) => (
                    <>
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
                                        <Link className="btn btn-primary btn-lg" to={urlButton} role="button">{labelButton}</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
            </SliderContext.Consumer>
        );
    }
}

Slider.contextType = SliderContext;