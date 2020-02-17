import React from 'react';

export default function GalleryPhotos({data:{photos}}){
    return(
        <div className="col-8 pr-0 pb-2">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {photos.map((photo, index) => {
                        const active = photo === photos[0] ? 'active' : '';
                        return(
                            <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={active}></li>
                        );
                    })}
                </ol>
                <div className="carousel-inner">
                    {photos.map((photo, index) => {
                        const active = photo === photos[0] ? 'active' : '';
                        return(
                            <div key={index} className={`carousel-item ${active}`}>
                                <img src={photo} className="d-block w-100" alt="..."/>
                            </div>
                        );
                    })}
                   
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}