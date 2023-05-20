import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div data-aos='zoom-out'>
            <h2 className="text-4xl font-bold text-center my-14">Some of your favorite heros</h2>
            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">
                    <img src="https://w0.peakpx.com/wallpaper/497/3/HD-wallpaper-thor-ragnarok-hulk-lighting-god-thor-and-hulk-marvel-thumbnail.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://w0.peakpx.com/wallpaper/287/974/HD-wallpaper-spiderman-cartoon-spiderman-spider-verse-thumbnail.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://w0.peakpx.com/wallpaper/823/965/HD-wallpaper-the-batman-2020-batman-batman-movie-batman-dark-dc-dc-comics-joker-superman-the-batman-thumbnail.jpg" alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src="https://w0.peakpx.com/wallpaper/512/260/HD-wallpaper-grooth-thanos-groot-thumbnail.jpg" alt="Drink" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;