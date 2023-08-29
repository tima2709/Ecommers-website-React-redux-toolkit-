import React from 'react';
import './services.css'
import {Col, Container, Row} from "reactstrap";
import serviceData from "../assets/data/serviceData";
import {motion} from "framer-motion";


const Services = () => {
    return (<section className={'services'}>
        <Container>
            <Row>
                {
                    serviceData.map((item, idx) => (
                        <Col lg={'3'} md={'4'} key={idx}>
                            <motion.div whileHover={{scale: 1.1}} className={'services__item'} style={{background: `${item.bg}`}}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))
                }

            </Row>

        </Container>
    </section>);
};

export default Services;