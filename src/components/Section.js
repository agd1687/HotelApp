import React from 'react';

export default function Section({title, children}){
    return(
        <>
            <hr className="my-4"></hr>
            <section className="container py-2 border rounded">
                <div className="text-center text-white  pb-3">
                    <h1>{title}</h1>
                </div>
                <div className="row justify-content-center">
                    {children}
                </div>
            </section>
        </>
    );
}