import React, { Component, Fragment } from 'react';

import { Container, Row, Col, DropdownItem, Button } from 'reactstrap';
import Navbars from '../Component/Navbars';
import Banner from '../Component/Banner';
import Services from '../Component/Services';

import banner1 from '../assets/banner/123.jpg'
import banner2 from '../assets/banner/1234.jpg'
import sofa from '../assets/services/sofa.jpg';
import bed from '../assets/services/bed.jpeg';
import carpet from '../assets/services/carpet.jpg';
import seat from '../assets/services/seat.jpg';
import pillow from '../assets/services/pillow.jpg';
import helmet from '../assets/services/helmet.jpg';

class Homepage extends Component {

    render() {

        return (

            <Fragment>
                <Navbars />
                <Container className="mb-5">
                    <Row className="mt-5">
                        <Col xs={12} md={8}>
                            <Banner />
                        </Col>

                        <Col xs={12} md={4}>
                            <Row>
                                <Col md={12}>
                                    <img src={banner2} className="w-100 mt-2" height={170} />
                                </Col>

                                <Col md={12}>
                                    <img src={banner1} className="w-100 mt-2" height={170} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="bg-info text-center text-white" md={3}>
                            <h3 className="mt-1">
                                <b>Layanan Utama</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider/>
                
                    <Row className="mt-1">
                        <Col md={2} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={sofa} />
                        </Col>
                        <Col md={2} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={bed} />
                        </Col>
                        <Col md={2} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={carpet} />
                        </Col>
                        <Col md={2} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={seat} />
                        </Col>

                        <Col md={2} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={pillow} />
                        </Col>
                        <Col md={2} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={helmet} />
                        </Col>

                        <Col md={12} className="mt-3">
                            <Button color="info" block outline>Pesanan Kustom</Button>
                        </Col>
                    </Row>

                    <Row className="mt-5 justify-content-center">
                        <Col className="bg-info text-center text-white" md={3}>
                            <h3 className="mt-1">
                                <b>Cleaner Profie</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider />

                    <Row className="mt-5">
                        <Col className="bg-info text-center text-white" md={{ size: 3, order: 2, offset: 9 }}>
                            <h3 className="mt-1">
                                <b>Daftar Harga</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider />

                    <Row className="mt-5 justify-content-center">
                        <Col className="bg-info text-center text-white" md={3}>
                            <h3 className="mt-1">
                                <b>Fitur Unggulan</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider />

                    <Row className="mt-5">
                        <Col className="bg-info text-center text-white" md={3}>
                            <h3 className="mt-1">
                                <b>Jangkauan Area</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider />

                </Container>
            </Fragment>
        )
    }
}

export default Homepage;