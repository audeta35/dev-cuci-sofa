import React, { Component, Fragment } from 'react';

import { Row, Col, DropdownItem, Button, Card, CardBody } from 'reactstrap';
import { Container } from '@material-ui/core';
import { KingBedOutlined } from '@material-ui/icons';

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

import cleaner from '../assets/user/cleaner.png';

class Homepage extends Component {

    constructor(props) {

        super(props);
        this.state = {

            value: 'recents'
        }
    }

    handleChange = (event, newValue) => {

        this.setState({ value: newValue })
    }

    render() {

        return (

            <Fragment>
                <Container maxWidth="sm" className="bg-white shadow">
                    <Row>
                        <Col xs={12} md={12} className="mt-4">
                            <Banner />
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col className="bg-info text-center text-white" xs={6}>
                            <h3 className="mt-1">
                                <b>Hot Promo</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider/>
                    <Row className="mt-1">
                        <Col md={4} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={sofa} />
                        </Col>
                        <Col md={4} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={bed} />
                        </Col>
                        <Col md={4} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={carpet} />
                        </Col>
                        <Col md={4} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={seat} />
                        </Col>

                        <Col md={4} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={pillow} />
                        </Col>
                        <Col md={4} xs={6} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={helmet} />
                        </Col>

                        <Col md={12} className="mt-3">
                            <Button color="info" block outline>Pesanan Kustom</Button>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col className="bg-info text-center text-white" xs={6} >
                            <h3 className="mt-1">
                                <b>Paket Bundling</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider />
                    <Row className="mt-1">
                        <Col className="mt-2" sm={6} xs={6}>
                            <Card className="shadow">
                                <CardBody className="text-center text-muted">
                                    <b>Set Ruang Tamu</b>
                                </CardBody>
                                <Button size="sm" block outline color="info">Detail</Button>
                            </Card>
                        </Col>

                        <Col className="mt-2" sm={6} xs={6}>
                            <Card className="shadow">
                                <CardBody className="text-center text-muted">
                                    <b>Set Kamar Tidur</b>
                                </CardBody>
                                <Button size="sm" block outline color="info">Detail</Button>
                            </Card>
                        </Col>

                        <Col className="mt-2" sm={6} xs={6}>
                            <Card className="shadow">
                                <CardBody className="text-center text-muted">
                                    <b>Karpet Masjid</b>
                                </CardBody>
                                <Button size="sm" block outline color="info">Detail</Button>
                            </Card>
                        </Col>

                        <Col className="mt-2" sm={6} xs={6}>
                            <Card className="shadow">
                                <CardBody className="text-center text-muted">
                                    <b>Set Jok Mobil</b>
                                </CardBody>
                                <Button size="sm" block outline color="info">Detail</Button>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="bg-info text-center text-white" xs={6}>
                            <h3 className="mt-1">
                                <b>Cleaner Team</b>
                            </h3>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border" divider />
                    <Row className="mt-1 justify-content-center">
                        <Col md={3} xs={5} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow badge-pill" />
                            
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Developer</i>
                        </Col>

                        <Col md={3} xs={5} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow badge-pill" />
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Marketing</i>
                        </Col>

                        <Col md={3} xs={5} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow badge-pill" />
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Founder</i>
                        </Col>

                        <Col md={3} xs={5} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow badge-pill" />
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Co Founder</i>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col className="bg-info text-center text-white" xs={6}>
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