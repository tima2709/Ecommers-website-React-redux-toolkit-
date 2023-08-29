import React from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import logo from '../../assets/images/eco-logo.png'
import {Link} from "react-router-dom";
import './footer.css'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className={'footer'}>
            <Container>
                <Row>
                    <Col lg={'4'} className={'mb-4'} md='6'>
                        <div className="logo">
                            <div>
                                <h1 className={'text-white'}>Multimart</h1>
                            </div>
                        </div>
                        <p className="footer__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quidem quis quos ut
                            voluptatibus? Accusamus beatae cupiditate explicabo incidunt nobis?
                        </p>
                    </Col>
                    <Col lg={'3'} md='3' className={'mb-4'}>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'#'}>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'#'}>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'#'}>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'#'}>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg={'2'} md={'3'} className={'mb-4'}>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'/shop'}>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'/cart'}>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'/login'}>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0'}>
                                    <Link to={'#'}>Privacy Police</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg={'3'} md={'4'}>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contacts</h4>
                            <ListGroup className={'footer__contact'}>
                                <ListGroupItem className={'ps-0 border-0 d-flex align-items-center gap-2'}>
                                    <span><i className={'ri-map-pin-line'}></i></span>
                                    <p>123. ZindaBazar, Sylmet</p>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0 d-flex align-items-center gap-2'}>
                                    <span><i className={'ri-phone-line'}></i></span>
                                    <p>+996 999 999 999</p>
                                </ListGroupItem>
                                <ListGroupItem className={'ps-0 border-0 d-flex align-items-center gap-2'}>
                                    <span><i className={'ri-mail-line'}></i></span>
                                    <p>example@gmail.ru</p>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg={'12'}>
                        <p className="footer__copyright">
                            Copyright {year} developed by Tima. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;