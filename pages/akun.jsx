import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import { Container, Divider } from '@material-ui/core';

import Navbars from '../Component/Navbars';
import cleaner from '../assets/user/cleaner.png';
import { Row, Col, Button } from 'reactstrap';

class Akun extends Component {

    constructor(props) {

        super(props);
    }

    componentDidMount() {

        console.log('pages: akun')
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Akun Saya" />
                <Container maxWidth="xs" className="bg-white">
                    <Row>
                        <Col className="text-center mt-5 mb-5" md={12}>
                            <img
                                src={cleaner}
                                className="img-thumbnail rounded-circle"
                                width={150}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className="mt-3 mb-3">
                            <b className="text-muted">username</b>
                            <i className="float-right text-muted">audeta sandy</i>
                        </Col>

                        <Col xs={12} className="mt-3 mb-3">
                            <b className="text-muted">alamat email</b>
                            <i className="float-right text-muted">audeta35@gmail.com</i>
                        </Col>

                        <Col xs={12} className="mt-3 mb-3">
                            <b className="text-muted">nomor telepon</b>
                            <i className="float-right text-muted">081212641384</i>
                        </Col>

                        <Col xs={12} className="mt-3 mb-3">
                            <b className="text-muted">alamat</b>
                            <Button className="float-right" color="info" size="sm" outline>
                                detail
                            </Button>
                        </Col>

                        <Col xs={12} className="mt-3 mb-5">
                            <Button color="danger" size="sm" block outline>
                                Keluar
                            </Button>
                        </Col>
                    </Row>             
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(Akun);