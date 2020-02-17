import React from 'react';

export default function RoomsFilters({filterMethod, currentFilters, clearFiltersMethod}){
    return(
        <div className="container my-4">
            <form>
                <div className="form-inline align-items-center justify-content-center">
                    <div className="col-auto my-1">
                        <label className="mr-sm-2 sr-only" htmlFor="typeRoom">Type</label>
                        <select value={currentFilters.type} className="custom-select mr-sm-2" id="typeRoom" name="type" onChange={filterMethod}>
                            <option value="all">All</option>
                            <option value="basic">Basic</option>
                            <option value="family">Family</option>
                            <option value="premiun">Premiun</option>
                            <option value="luxury">Luxury</option>
                            <option value="presidential">Presidential</option>
                        </select>
                    </div>
                    <div className="col-auto my-1">
                        <label className="text-white" htmlFor="minPrice">Price From: {currentFilters.minPrice}</label>
                        <input value={currentFilters.minPrice} type="range" className="custom-range" min="0" max="600" id="minPrice" name="minPrice" onChange={filterMethod}/>
                    </div>
                    <div className="col-auto my-1">
                        <label className="text-white" htmlFor="maxPrice">Price To: {currentFilters.maxPrice}</label>
                        <input value={currentFilters.maxPrice} type="range" className="custom-range" min="0" max="600" id="maxPrice" name="maxPrice" onChange={filterMethod}/>
                    </div>
                    <div className="col-auto my-1">
                        <label className="text-white" htmlFor="capacity">Capacity: {currentFilters.capacity <= 0 ? "all" : currentFilters.capacity}</label>
                        <input value={currentFilters.capacity} type="range" className="custom-range" min="0" max="10" id="capacity" name="capacity" onChange={filterMethod}/>
                    </div>
                    <div className="col-auto my-1">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input checked={currentFilters.breakfast} type="checkbox" className="custom-control-input" id="serviceBreakfast" name="breakfast" onChange={filterMethod}/>
                            <label className="custom-control-label text-white" htmlFor="serviceBreakfast">Breakfast</label>
                        </div>
                    </div>
                    <div className="col-auto my-1">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input checked={currentFilters.pets} type="checkbox" className="custom-control-input" id="servicePets" name="pets" onChange={filterMethod}/>
                            <label className="custom-control-label text-white" htmlFor="servicePets">Pets</label>
                        </div>
                    </div>
                    <div className="col-auto my-1">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input checked={currentFilters.spa} type="checkbox" className="custom-control-input" id="serviceSpa" name="spa" onChange={filterMethod}/>
                            <label className="custom-control-label text-white" htmlFor="serviceSpa">Spa</label>
                        </div>
                    </div>
                    <div className="col-auto my-1">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input checked={currentFilters.minibar} type="checkbox" className="custom-control-input" id="serviceMinibar" name="minibar" onChange={filterMethod}/>
                            <label className="custom-control-label text-white" htmlFor="serviceMinibar">Minibar</label>
                        </div>
                    </div>
                    <div className="col-auto my-1">
                        <button className="btn btn-primary" onClick={clearFiltersMethod}>Clear</button>
                    </div>
                </div>
            </form>
            <hr/>
        </div>
        
    );
}