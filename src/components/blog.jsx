import {CONSTANTES} from '../constant/const.ts';
import React,{Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/blog.css';
import {Card, CardImg} from 'react-bootstrap';
import NavCard from './navCard.jsx';
import { NavLink } from 'react-router-dom';
import CARDIMAGEN from '../assets/image/MAR/IMG_5992.webp'
function Blog() {
  return (
    <Fragment>
      <NavCard/>
      <div className='row' id='Cards'>
        <Card style={{ width: '18rem', padding: '0' }} data-category='consejo' className='m-3'>
          <Card.Img src={CARDIMAGEN} className='imgCard'></Card.Img>
          <Card.Body>
            <Card.Title>{CONSTANTES.TITULO_CONSEJO}</Card.Title>
            <Card.Text>{CONSTANTES.TEXTO_BLOG}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', padding: '0' }} data-category='Tendencia' className='m-3'>
          <Card.Img src={CARDIMAGEN} className='imgCard'></Card.Img>
          <Card.Body>
            <Card.Title>{CONSTANTES.TITULO_TENDENCIA}</Card.Title>
            <Card.Text>{CONSTANTES.TEXTO_BLOG}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', padding: '0' }} data-category='Diseño' className='m-3'>
          <Card.Img src={CARDIMAGEN} className='imgCard'></Card.Img>
          <Card.Body>
            <Card.Title>{CONSTANTES.TITULO_DISEÑO}</Card.Title>
            <Card.Text>{CONSTANTES.TEXTO_BLOG}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', padding: '0' }} data-category='Diseño' className='m-3'>
          <Card.Img src={CARDIMAGEN} className='imgCard'></Card.Img>
          <Card.Body>
            <Card.Title>{CONSTANTES.TITULO_DISEÑO}</Card.Title>
            <Card.Text>{CONSTANTES.TEXTO_BLOG}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default Blog;