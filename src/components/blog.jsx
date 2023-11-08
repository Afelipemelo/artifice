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
  const [noticiaModal, setnoticiaModal] = useState([])
  useEffect(() => {
    if (idNoticia != 4){
      const noticia = NOTICIAS.filter(n => n.idNoticia == idNoticia)
      setNoticias(noticia)
    }else{
      setNoticias(NOTICIAS)
    }
  },[idNoticia])
  
  const toggleModal = (id) => {
    if(id == 0){
      setMostrarModal(!mostrarModal);
      console.log(noticiaModal)
    }else{
      const modal = NOTICIAS.filter(n => n.id == id)
      setnoticiaModal(modal[0])
      setMostrarModal(!mostrarModal);
    }
  };
  return (
    <Fragment>
      <div className='row' id='Cards'>
        {noticias.map((noticia)=> (
            <Card style={{ width: '18rem', padding: '0' }} data-category='consejo' className='m-4'>
              <Card.Img src={noticia.imagen} key={noticia.idNoticia} className='imgCard'></Card.Img>
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>{noticia.texto}</Card.Text>
              </Card.Body>
              <div className='botton-container'>
                <Button variant="primary" style={{color : "#ffff", backgroundColor : '#736357', border : '#736357'}} onClick={()=>toggleModal(noticia.id)}>
                  Mostrar Más
                </Button>
              </div>
            </Card>
        ))}

        <Modal show={mostrarModal} onHide={()=>toggleModal(0)}>
            <Modal.Header closeButton>
              <Modal.Title>{noticiaModal.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card.Img src={noticiaModal.imagen}  className='imgCard'></Card.Img>
              {noticiaModal.textoCompleto}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" style={{color : "#ffff", backgroundColor : '#736357', border : '#736357'}} onClick={toggleModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </Fragment>
  );
}

export default Blog;