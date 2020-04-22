import React, {Component, Fragment} from 'react';
import { Divider } from '@material-ui/core';
import { MonetizationOnTwoTone, SupervisedUserCircleTwoTone, ReceiptOutlined } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { Card, CardBody, CardFooter, Media, Row, Col, Button } from 'reactstrap';

import seat from '../../assets/services/seat.jpg';
import Navbars from '../../Component/Navbars';

class Produk extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Nama Produk/Jasa" stack={true} />
                <Container maxWidth="xs">
                   <Card className="my-4 shadow-sm">
                        <CardBody>
                            <Media>
                                <Media left>
                                    <img src={seat} width={64} height={64} />
                                </Media>
                                <Media body className="mx-2">
                                    <b>Nama Produk / Service / Paket</b>
                                    <Divider className="my-1" />
                                    <Row className="mt-2">
                                        <Col xs={6}>
                                            <small className="text-dark">
                                                <MonetizationOnTwoTone className="mr-1" />
                                                350.000
                                            </small>
                                        </Col>

                                        <Col xs={6}>
                                            <Button color="dark" size="sm" block outline> 
                                              <ReceiptOutlined />  Pesan
                                            </Button>
                                        </Col>
                                    </Row>
                                </Media>
                            </Media>
                        </CardBody>
                        <CardFooter className="bg-white">
                           <b>Deskripsi</b>

                            <Divider className="my-3" />
                            <p>
                               lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet
                            </p>
                        </CardFooter>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}

export default Produk;