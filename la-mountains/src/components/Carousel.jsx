import React from "react";
import styles from './Carousel.module.css';

const Carousel = () => {
    const images = [
        "./images/carousel/1.png",
        "./images/carousel/2.png",
        "./images/carousel/1.png",
        "./images/carousel/2.png",
        "./images/carousel/1.png",
        "./images/carousel/2.png",
        "./images/carousel/1.png",
        "./images/carousel/2.png",
    ];
    // const [index, setIndex] = React.useState(0);
    const imagesPerSlide = 3;
    const totalSlides = Math.ceil(images.length / imagesPerSlide);
    const [slide, setSlide] = React.useState(0);

    const getImages = () => {
        const start = slide * imagesPerSlide;
        const end = start + imagesPerSlide;
        return images.slice(start, end);
    }

    const getEllipses = () => {
        const ellipses = [];
        for (let i = 0; i < totalSlides; i++) {
            if (i === slide) {
                ellipses.push(<img alt="selected ellipse button" src="./images/carousel/Ellipse-1.png" key={i} className="Ellipse EllipseActive" />);
            } else {
                ellipses.push(<img alt="ellipse button" src="./images/carousel/Ellipse-2.png" key={i} className="Ellipse" onClick={() => setSlide(i)} />);
            }
        }
        return ellipses;
    }


    return (
    <div id={styles.Carousel}>
        <div id={styles.CarouselImages}>
        {
            getImages().map((image, index) => {
                return (
                    <div key={index} className="CarouselImage">
                        <img src={image} alt="Displayed gallery item" />
                    </div>
                );
            })  
        }
        </div>
        <div id={styles.CarouselControls}> 
        { getEllipses() }
        </div>

    </div>
    );
}

export default Carousel;