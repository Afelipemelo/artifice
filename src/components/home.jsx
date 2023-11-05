import React,{Fragment, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ARENA from '../assets/image/ARENA/bcafbb82-bf68-401a-8b36-68601aa5d387.webp'
import PRIMAVERA from '../assets/image/PRIMAVERA/IMG_3695.webp'
import RIVER from '../assets/image/RIVER/IMG_3785.webp'
import COLLAGEONE from '../assets/image/ARENA/3f844c25-0ad6-4c8f-8542-27cd7f06a3ec.webp'
import COLLAGETWO from '../assets/image/ARTCO/00b389a1-e9ce-44b0-9c4c-a4beba087626.webp'
import COLLAGETHREE from '../assets/image/ATTICO/IMG_0360.webp'
import COLLAGEFOUR from '../assets/image/FARO/IMG_3946.webp'
import COLLAGEFIVE from '../assets/image/LUANA_/02068ff9-b15e-4f31-b792-e3b8561fabd1.webp'
import COLLAGESIX from '../assets/image/MAR/IMG_0718.webp'
import COLLAGESEVEN from '../assets/image/PALMA/7243CED1-AF7C-40D4-BC96-CE8A5806ABB3.webp'
import COLLAGEEIGHT from '../assets/image/PRIMAVERA/3D5E4601-492A-4AF8-9A08-FE6182D160E9.webp'
import COLLAGENINE from '../assets/image/RIVER/IMG_3784.webp'
import COLLAGENTEN from '../assets/image/ATTICO/IMG_0344.webp'
import {CONSTANTES} from '../constant/const.ts'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css'

const slides = 
    [
        {
          image: ARENA,
          title: "ARENA",
          year: "2018",
          interval: 4000
        },
        {
          image: PRIMAVERA,
          title: "PRIMAVERA",
          year: "2018",
          interval: 4000
        },
        {
          image: RIVER,
          title: "RIVER",
          year: "2018",
          interval: 4000
        }
]
 
const Home = () => {

    const ancho = 700;
    var width = window.innerWidth;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (  
        <Fragment>
            <div className='carousel-container'>
                <Carousel activeIndex={index}
                    onSelect={handleSelect}
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed hola" />}
                >
                {slides.map((slide) => (
                    <Carousel.Item key={slide.image} interval={slide.interval}>
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.title}
                    />
                    <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        <p>{slide.year}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
            <div className='info-container'>
                    <h1>{CONSTANTES.TITULO_QUINES_SOMO}</h1>
                    <p>{CONSTANTES.TEXTO_QUINES_SOMO}</p>
            </div>
            <div className='collages-container'>
                {width <= ancho ? 
                    <div className='img-container'>
                        <img src={COLLAGEONE} alt='COLLAGEONE' />
                        <img src={COLLAGETWO}  alt='COLLAGETWO' />
                        <img src={COLLAGETHREE}  alt='COLLAGETHREE' />
                        <img src={COLLAGEFOUR}  alt='COLLAGEFOUR' />
                        <img src={COLLAGEFIVE}  alt='COLLAGEFIVE' />
                        <img src={COLLAGESIX}  alt='COLLAGESIX' />
                    </div>
                :
                    <div className='img-container'>
                        <img src={COLLAGEONE} alt='COLLAGEONE' />
                        <img src={COLLAGETWO}  alt='COLLAGETWO' />
                        <img src={COLLAGETHREE}  alt='COLLAGETHREE' />
                        <img src={COLLAGEFOUR}  alt='COLLAGEFOUR' />
                        <img src={COLLAGEFIVE}  alt='COLLAGEFIVE' />
                        <img src={COLLAGESIX}  alt='COLLAGESIX' />
                        <img src={COLLAGESEVEN}  alt='COLLAGESEVEN' />
                        <img src={COLLAGEEIGHT}  alt='COLLAGEEIGHT' />
                        <img src={COLLAGENINE}  alt='COLLAGENINE' />
                        <img src={COLLAGENTEN}  alt='COLLAGENTEN' />
                    </div>
                }

            </div>
        </Fragment>
    );
}
 
export default Home;