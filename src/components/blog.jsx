import {CONSTANTES} from '../constant/const.ts';
import React,{Fragment, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/blog.css';
import {Card, Modal, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CARDIMAGEN from '../assets/image/MAR/IMG_5992.webp'
import NOTICIAS from '../noticias.json';
function Blog({idNoticia}) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [noticias, setNoticias] = useState([])
  useEffect(() => {
    if (idNoticia != 4){
      const noticia = NOTICIAS.filter(n => n.idNoticia == idNoticia)
      setNoticias(noticia)
    }else{
      setNoticias(NOTICIAS)
    }
    
  },[idNoticia])
  const toggleModal = (n) => {
    console.log(n)
    setMostrarModal(!mostrarModal);
  };
  return (
    <Fragment>
      <div className='row' id='Cards'>
        {noticias.map((noticia)=> (
            <Card style={{ width: '18rem', padding: '0' }} data-category='consejo' className='m-3'>
              <Card.Img src={noticia.imagen} key={noticia.idNoticia} className='imgCard'></Card.Img>
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>{noticia.texto}</Card.Text>
              </Card.Body>
              <Button variant="info" onClick={toggleModal(noticia.idNoticia)}>
                Mostrar Más
              </Button>
            </Card>
        ))}
          <Modal show={mostrarModal} onHide={toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>{CONSTANTES.TITULO_DISEÑO}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card.Img src={CARDIMAGEN}  className='imgCard'></Card.Img>
              {CONSTANTES.TEXTO_BLOG}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </Fragment>
  );
}

export default Blog;