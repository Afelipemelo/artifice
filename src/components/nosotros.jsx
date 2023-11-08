import React, { Fragment } from 'react';
import '../style/nosotros.css'
import { CONSTANTES } from '../constant/const.ts';
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuCalendarClock } from "react-icons/lu";
import { LiaAwardSolid } from "react-icons/lia";
import { FaRegHandshake } from "react-icons/fa6";
import { BsHouseHeart } from "react-icons/bs";
import { TbHomeStats } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";

const Nosotros = () => {


    return ( 
        <Fragment>
            <div className='titulo-container'>
                <h1>{CONSTANTES.ACERCA_NOSOTROS}</h1>
            </div>
            <div className='nosotros-container'>
                <div className='nosotros'>
                    <div className='info-nosotros'>
                        <h4>{CONSTANTES.VISION}</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, explicabo cumque. Natus, dolorem adipisci harum corporis ea tenetur cumque animi. Inventore error quis obcaecati dolorem aliquam repellat distinctio harum impedit.</p>
                    </div>
                    <div className='img-nosotros'>
                        <img src="https://imgs.search.brave.com/RGaNGpSEVcorhx3WiCDfhXVKuLlA4gij9jQ5KC6oDvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWNv/cmFpZGVhcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTIvSW1hZ2UwMTk5/XzItMy03Njh4NDMy/LmpwZy53ZWJw" alt="fondo" />
                    </div>
                </div>
                <div className='nosotros'>
                    <div className='img-nosotros'>
                        <img src="https://imgs.search.brave.com/RGaNGpSEVcorhx3WiCDfhXVKuLlA4gij9jQ5KC6oDvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWNv/cmFpZGVhcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTIvSW1hZ2UwMTk5/XzItMy03Njh4NDMy/LmpwZy53ZWJw" alt="fondo" />
                    </div>

                    <div className='info-nosotros'>
                        <h4>{CONSTANTES.MISION}</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, explicabo cumque. Natus, dolorem adipisci harum corporis ea tenetur cumque animi. Inventore error quis obcaecati dolorem aliquam repellat distinctio harum impedit.</p>
                    </div>
                </div>
            </div>
            <div className='linea-separacion'></div>
            <div className='titulo-container'>
                <h1>{CONSTANTES.VALORES}</h1>
            </div>
            <div className='valores-container'>
                <div className='valores'>
                    <div className='icono-valor'>
                        <HiOutlineLightBulb style={{fontSize : '50px'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>creatividad</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
                <div className='valores'>
                    <div className='icono-valor-vari'>
                        <LuCalendarClock style={{fontSize : '50px', color : '#FFFF'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>compromiso</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
                <div className='valores'>
                    <div className='icono-valor'>
                        <LiaAwardSolid style={{fontSize : '50px'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>calidad</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
            </div>
            <div className='valores-container'>
                <div className='valores'>
                    <div className='icono-valor-vari'>
                        <FaRegHandshake style={{fontSize : '50px', color : '#FFFF'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>integridad</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
                <div className='valores'>
                    <div className='icono-valor'>
                        <BsHouseHeart style={{fontSize : '50px'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>pasion</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
                <div className='valores'>
                    <div className='icono-valor-vari'>
                        <TbHomeStats style={{fontSize : '50px', color : '#FFFF'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>sostenibilidad</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
            </div>
            <div className='valores-container'>
                <div className='valores'>
                    <div className='icono-valor'>
                        <IoRocketOutline style={{fontSize : '50px'}}/>
                    </div>
                    <div className='titulo-valor'>
                        <h5>innovacion</h5>
                    </div>
                    <div className='texto-valor'>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere quia ex reiciendis perspiciatis ipsum autem</h6>
                    </div>
                </div>
            </div>

        </Fragment>
     );
}
 
export default Nosotros;