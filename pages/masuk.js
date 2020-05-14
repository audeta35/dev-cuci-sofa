import React, { Component, Fragment } from 'react';
import { Container, TextField } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import Navbars from '../Component/Navbars';

class masuk extends Component {

    constructor(props) {

        super(props);
        this.state=  {

            email : '',
            password : '',
        }
    }

    componentDidmount() {

        console.log('halaman masuk');
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Masuk" stack={true} />
                <Container maxWidth="xs">
                    <Row className="my-2">
                        <Col md={12} className="my-3">
                            <TextField label="alamat email" fullWidth />
                        </Col>

                        <Col md={12} className="my-3">
                            <TextField label="password" fullWidth />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default masuk;