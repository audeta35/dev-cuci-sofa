import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import { EventTwoTone, MonetizationOnTwoTone, SupervisedUserCircleTwoTone } from '@material-ui/icons';
import seat from '../assets/services/seat.jpg';
import { Card, CardHeader, CardBody, CardFooter, Media, Row, Col, Button, Spinner } from 'reactstrap';
import { useRouter } from 'next/router';

const ListInvoice = (props) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const pushLink = () => {

        setIsLoading(true)
        router.push({

            pathname : "invoice",

        })
    }

    return (

        <Card className="my-4 shadow-sm">
            <CardHeader className="text-secondary bg-white">
                <span className="badge badge-primary">ID Invoice</span> /
                <span className="badge badge-success">Status Pemesanan</span>
            </CardHeader>
            <CardBody>
                <Media>
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
            {
                isLoading ? 
                <Button className="stretched-link" color="primary" onClick={() => pushLink()} block disabled>
                    <Spinner size="sm"/> struk pesanan
                </Button>
                :
                <Button className="stretched-link" color="primary" onClick={() => pushLink()} block outline>
                    struk pesanan
                </Button>
            }
            </CardFooter>
        </Card>
    )
}

export default ListInvoice;
