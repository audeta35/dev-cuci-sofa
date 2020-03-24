import React, { Component, Fragment } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Navbars from '../Component/Navbars';
import Banner from '../Component/Banner';

import banner1 from '../assets/banner/123.jpg'
import banner2 from '../assets/banner/1234.jpg'

class Homepage extends Component {

    render() {

        return (

            <Fragment>
                <Navbars />
                <Container>
                    <Row className="mt-5">
                        <Col xs={12} md={8}>
                            <Banner />
                        </Col>

                        <Col xs={12} md={4}>
                            <Row>
                                <Col md={12}>
                                    <img src={banner1} className="w-100 mt-2" height={170} />
                                </Col>

                                <Col md={12}>
                                    <img src={banner2} className="w-100 mt-2" height={170} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Homepage;