import React, { Fragment } from 'react';
import {CONSTANTES} from '../constant/const.ts';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre"
                            />
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Numero"
                            />
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mensaje"
                            />
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
                <div className='redesSociales-contaienr'></div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;