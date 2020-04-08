import React from 'react';
import { Divider } from '@material-ui/core';
import { EventTwoTone, MonetizationOnTwoTone, SupervisedUserCircleTwoTone } from '@material-ui/icons';
import seat from '../assets/services/seat.jpg';
import { Card, CardHeader, CardBody, CardFooter, Media, Row, Col } from 'reactstrap';

const Invoice = () => {

    return (

        <Card className="my-4 shadow">
            <CardHeader className="text-secondary bg-white">
                <span className="badge badge-info">ID Invoice</span> /
                <span className="badge badge-secondary">Tanggal Pesanan</span> /
                <span className="badge badge-success">Status Pemesanan</span>
            </CardHeader>
            <CardBody>
                <Media>
                    <Media left>
                        <img src={seat} width={64} height={64} />
                    </Media>
                    <Media body className="mx-2">
                        <small>Nama Produk / Service / Paket</small>
                        <Divider className="my-1" />
                        <Row>
                            <Col xs={6}>
                                <small>
                                    <EventTwoTone className="mr-1" />
                                    08/03/2020
                                </small>
                            </Col>

                            <Col xs={6}>
                                <small>
                                    <MonetizationOnTwoTone className="mr-1" />
                                    350.000
                                </small>
                            </Col>
                        </Row>
                    </Media>
                </Media>
            </CardBody>
            <CardFooter className="bg-white">
                <small className="text-info">
                    <SupervisedUserCircleTwoTone className="mr-1" />
                    <i>Team Cleaner</i>
                </small>
            </CardFooter>
        </Card>
    )
}

export default Invoice;
