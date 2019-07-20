import React from 'react';
import { Zoom  } from 'react-slideshow-image';

import wallpaper1 from "../assets/img/wallpaper1.png";
import wallpaper2 from "../assets/img/wallpaper2.jpg";
import wallpaper3 from "../assets/img/wallpaper3.jpeg";
import wallpaper4 from "../assets/img/wallpaper4.jpg";

const images = [
    wallpaper4,
    wallpaper1,
    wallpaper2,
    wallpaper3,

];

const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false
}

class Dashboard extends React.Component {

    render() {
        return (
            <Zoom {...zoomOutProperties}>
                {
                    images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                }
            </Zoom>
        );
    }
}

export default Dashboard;