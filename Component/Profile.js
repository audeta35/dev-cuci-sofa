import React, {Fragment} from 'react';

import { Container, IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import cleaner from '../assets/user/cleaner.png';
import { Row, Col, Button } from 'reactstrap';

const Profile = () => {

	return (

        <Fragment maxWidth="xs">
            <Row>
                <Col className="text-center mt-5 mb-5" md={12}>
                    <img
                        src={cleaner}
                        className="img-thumbnail rounded-circle shadow-sm"
                        width={150}
                    />
                    <IconButton className="bg-danger text-white mr-4" style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <ExitToApp />
                    </IconButton>
                </Col>
            </Row>

            <Row className="bg-white">
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
                    <Button className="float-right" color="primary" size="sm" outline>
                        detail
                    </Button>
                </Col>
            </Row>

        </Fragment>

    )
}

export default Profile;