import React,{Fragment, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/blog.css';
import {Card, Modal, Button} from 'react-bootstrap';
import NOTICIAS from '../noticias.json';

function Blog({idNoticia}) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [noticias, setNoticias] = useState([])

  const [modalNoticia, setModalNoticia] = useState(null);
  useEffect(() => {
    
    if (idNoticia !== 4){
      const noticia = NOTICIAS.filter((n) => n.idNoticia === idNoticia);
      setNoticias(noticia);
    }else{
      setNoticias(NOTICIAS)
    }
    
  },[idNoticia])
  const toggleModal = (noticia) => {
    setModalNoticia(noticia);
    setMostrarModal(!mostrarModal);
  };
  return (
    <Fragment>
      <div className='row' id='Cards'>
        {noticias.map((noticia)=> (
          <>
            <Card style={{ width: '18rem', padding: '0' }} data-category='consejo' className='m-3'>
              <Card.Img src={noticia.imagen} key={noticia.idNoticia} className='imgCard'></Card.Img>
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>{noticia.texto}</Card.Text>
              </Card.Body>
              <Button variant="info" onClick={toggleModal(noticia)}>
                Mostrar Más
              </Button>
            </Card>
            <Modal show={mostrarModal} onHide={() => toggleModal(null)}>
            <Modal.Header closeButton>
              <Modal.Title>{modalNoticia ? modalNoticia.titulo : ''}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {modalNoticia && <Card.Img src={modalNoticia.imagen} className='imgCard' />}
              {modalNoticia ? modalNoticia.texto : ''}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal(null)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          </>
        ))}
     </div>     
    </Fragment>
  );
}

export default Blog;