import React, { Component, Fragment } from 'react';

import { Row, Col, DropdownItem, Button, Card, CardBody } from 'reactstrap';
import { Container, Chip } from '@material-ui/core';
import { RoomOutlined } from '@material-ui/icons';

import { withRouter } from 'next/router';

import Navbars from '../Component/Navbars';
import Banner from '../Component/Banner';
import Services from '../Component/Services';

import sofa from '../assets/services/sofa.jpg';
import bed from '../assets/services/bed.jpeg';
import carpet from '../assets/services/carpet.jpg';
import seat from '../assets/services/seat.jpg';
import pillow from '../assets/services/pillow.jpg';
import helmet from '../assets/services/helmet.jpg';

import cleaner from '../assets/user/cleaner.png';
import Bundling from '../Component/Bundling';

class Homepage extends Component {

    constructor(props) {

        super(props);
        this.state = {

            value: 'recents'
        }
    }

    componentDidMount() {

        console.log('pages: Homepage')
    }

    handleChange = (event, newValue) => {

        this.setState({ value: newValue })
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Cuci Sofa"/>
                <Container maxWidth="xs" className="bg-white">
                    <Row>
                        <Col xs={12} md={12} className="mt-4">
                            <Banner />
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col className="bg-info text-center text-white" xs={6}>
                            <h4 className="mt-1">
                                <b>Hot Promo</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col xs={4} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={sofa} />
                        </Col>
                        <Col xs={4} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={bed} />
                        </Col>
                        <Col xs={4} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={carpet} />
                        </Col>
                        <Col xs={4} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={seat} />
                        </Col>

                        <Col xs={4} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={pillow} />
                        </Col>
                        <Col xs={4} className="mt-2">
                            <Services title="Sofa & Sofa Bed" image={helmet} />
                        </Col>

                        <Col md={12} className="mt-3">
                            <Button color="info" block outline>Pesanan Kustom</Button>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col className="bg-info text-center text-white" xs={6} >
                            <h4 className="mt-1">
                                <b>Paket Bundling</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col className="mt-2">
                            <Bundling title="Set Ruang Tamu" image={carpet} />
                        </Col>

                        <Col className="mt-2">
                            <Bundling title="Set Kamar Tidur" image={pillow} />
                        </Col>

                        <Col className="mt-2">
                            <Bundling title="Set Jok Mobil" image={seat} />
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="bg-info text-center text-white" xs={6}>
                            <h4 className="mt-1">
                                <b>Cleaner Team</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="mt-1 justify-content-center">
                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Developer</i>
                        </Col>

                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Marketing</i>
                        </Col>

                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Founder</i>
                        </Col>

                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            <h6 className="mt-3 text-info">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-info">Co Founder</i>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="bg-info text-center text-white" xs={6}>
                            <h4 className="mt-1">
                                <b>Jangkauan</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="mb-5 mt-3">
                        <Col>
                            <Card className="shadow">
                                <Button color="info">Request Tempat</Button>
                                <CardBody>
                                    <Row className="justify-content-center">
                                        <Col className="mt-1 text-center">
                                            <Chip
                                                icon={<RoomOutlined />}
                                                label="Jakarta"
                                                variant="outlined"
                                            />
                                        </Col>

                                        <Col className="mt-1 text-center">
                                            <Chip
                                                icon={<RoomOutlined />}
                                                label="Bekasi"
                                                variant="outlined"
                                            />
                                        </Col>

                                        <Col className="mt-1 text-center">
                                            <Chip
                                                icon={<RoomOutlined />}
                                                label="Bogor"
                                                variant="outlined"
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <DropdownItem className="bg-info border mb-4" divider />
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(Homepage);