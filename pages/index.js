import React, { Component, Fragment } from 'react';

import { Row, Col, DropdownItem, Button, Card, CardBody } from 'reactstrap';
import { Container, Chip } from '@material-ui/core';
import { RoomTwoTone, WeekendTwoTone, KingBedTwoTone, AspectRatioTwoTone, EventSeatTwoTone } from '@material-ui/icons';

import { withRouter } from 'next/router';

import AppBars from '../Component/AppBars';
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

class homepage extends Component {

    constructor(props) {

        super(props);
        this.state = {

            value: 'recents'
        }
    }

    componentDidMount() {

        console.log('pages: homepage')
    }

    handleChange = (event, newValue) => {

        this.setState({ value: newValue })
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Cuci Sofa"/>
                <Container maxWidth="xs">
                    <Row className="my-4">
                        <Col>
                            <Banner />
                        </Col>
                    </Row>

                    <Row className="my-4">
                        <Col className="bg-primary text-center text-white" xs={6}>
                            <h4 className="mt-1">
                                <b>Jasa Kami</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs={6} className="my-2">
                            <Services sub="hot promo" title="Sofa" subtitle="Cuci Sofa" />
                        </Col>
                        <Col xs={6} className="my-2">
                            <Services sub="hot promo" title="Kasur" subtitle="Cuci Kasur" />
                        </Col>
                        <Col xs={6} className="my-2">
                            <Services sub="hot promo" title="Karpet" subtitle="Cuci Karpet" />
                        </Col>
                        <Col xs={6} className="my-2">
                            <Services sub="hot promo" title="Jok Mobil" subtitle="Cuci Jok Mobil" />
                        </Col>

                        <Col xs={6} className="my-2">
                            <Services sub="hot promo" title="Bantal" subtitle="Cuci Bantal" />
                        </Col>
                        <Col xs={6} className="my-2">
                            <Services sub="hot promo" title="Springbed" subtitle="Cuci Springbed" />
                        </Col>
                    </Row>

                    <Row className="my-4">
                        <Col className="bg-primary text-center text-white" xs={6} >
                            <h4 className="mt-1">
                                <b>Paket Bundling</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="bg-white py-3">
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

                    <Row className="my-4">
                        <Col className="bg-primary text-center text-white" xs={6}>
                            <h4 className="mt-1">
                                <b>Cleaner Team</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="bg-white py-3 justify-content-center">
                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            
                            <h6 className="mt-3 text-primary">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-primary">Developer</i>
                        </Col>

                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            <h6 className="mt-3 text-primary">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-primary">Marketing</i>
                        </Col>

                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            <h6 className="mt-3 text-primary">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-primary">Founder</i>
                        </Col>

                        <Col md={3} xs={3} sm={4} className="text-center mt-3">
                            <img src={cleaner} className="img-thumbnail shadow rounded-circle" />
                            <h6 className="mt-3 text-primary">
                                <b>Audeta Sandy</b>
                            </h6>

                            <i className="badge badge-primary">Co Founder</i>
                        </Col>
                    </Row>

                    <Row className="my-4">
                        <Col className="bg-primary text-center text-white" xs={6}>
                            <h4 className="mt-1">
                                <b>Jangkauan</b>
                            </h4>
                        </Col>
                    </Row>
                    <Row className="mb-5 bg-white py-3 justify-content-center">
                        <Col className="mt-1 text-center">
                            <Chip
                                icon={<RoomTwoTone />}
                                label="Jakarta"
                                variant="outlined"
                            />
                        </Col>

                        <Col className="mt-1 text-center">
                            <Chip
                                icon={<RoomTwoTone />}
                                label="Bekasi"
                                variant="outlined"
                            />
                        </Col>

                        <Col className="mt-1 text-center">
                            <Chip
                                icon={<RoomTwoTone />}
                                label="Bogor"
                                variant="outlined"
                            />
                        </Col>
                    </Row>
                    <DropdownItem className="bg-primary border mb-4" divider />
                </Container>
                <AppBars />
            </Fragment>
        )
    }
}

export default withRouter(homepage);