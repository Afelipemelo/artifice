import React, { Fragment } from 'react';
import {CONSTANTES} from '../constant/const.ts';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/footer.css'
const Footer = () => {
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      };
    return ( 
        <Fragment>
            <footer className='footer-contenedor'>
                <div className='contacto-container'>
                    <h5>{CONSTANTES.TITULO_CONTACTO}</h5>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className='my-2' controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre"
                            />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className='my-2' controlId="validationCustom01">
                            <Form.Control
                                required
                                type="number"
                                placeholder="Numero"
                            />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className='Mensaje' controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mensaje"
                            />
                            </Form.Group>
                            <button type='submit' className='boton-form'>Enviar</button>
                        </Row>
                    </Form>
                </div>
                <div className='redesSociales-container'>
                    <Row as={Col} md={12} className=' mb-3 mx-3'> 
                        <div className='contacts'>
                            <i className='bi bi-envelope'><h6 className='text-contact'>{CONSTANTES.CORREO}</h6></i><br/>
                        </div>
                        <div className='contacts'>
                            <i className='bi bi-telephone'><h6 className='text-contact'>{CONSTANTES.TELEFONO}</h6></i><br/>
                        </div>
                        <div className='contacts'>
                            <i className='bi bi-house-door'><h6 className='text-contact'>{CONSTANTES.DIRECCION}</h6></i><br/>
                        </div>
                        <div className='RedSocial'>
                            <i className='bi bi-whatsapp mr-5'/>
                            <i className='bi bi-facebook mr-5'/>
                            <i className='bi bi-instagram mr-5'/>
                            <i className='bi bi-twitter mr-5'/>
                        </div> 
                    </Row>
                </div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;