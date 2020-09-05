import React from 'react'
import './Widget.css';

const Widget = () => {
    return (
        <div className="widget">
            <iframe
                src="https://en.wikipedia.org/wiki/Coronavirus_disease_2019"
                width="450"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
                title="widget">
            </iframe>



        </div>
    )
}

export default Widget;
