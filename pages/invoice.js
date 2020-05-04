import React, { Component, Fragment } from 'react';

import Router, { withRouter } from 'next/router';
import { Container, ListItem, ListItemText, Divider } from '@material-ui/core';
import { ListGroup, ListGroupItem, Row, Col, Table, Card, CardBody, CardFooter, Badge } from 'reactstrap';
import { ReceiptTwoTone, AccountBoxTwoTone, EmailTwoTone, AccountBalanceWalletTwoTone, TodayTwoTone, EventTwoTone } from '@material-ui/icons';
import Navbars from '../Component/Navbars';

class invoice extends Component {

    constructor(props) {

        super(props);

        this.state = {

            number : 1,
            serviceName : "Cuci Sofa",
            product : [{
                id : 1,
                price : 40000,
                pcs : "item",
                name : "Sofa"
            },
            {
                id : 2,
                price : 160000,
                pcs : "item",
                name : "Sofa Bed"
            },
            {
                id : 3,
                price : 10000,
                pcs : "item",
                name : "Bantal Sofa"
            },
            {
                id : 4,
                price : 80000,
                pcs : "item",
                name : "Karpet Sofa"
            }],
        }
    }

	render() {

		return (

			<Fragment>
                <Navbars navbrand="INV/1234/ASDF" stack={true} />
                <Container maxWidth="xs">                   
                    <Card className="my-4">
                        <CardBody>
                            <h3>
                                <b className="text-primary">
                                   Cuci Sofa
                                </b>
                                <small className="text-primary">.id</small>
                            </h3>

                            <Divider />

                            <Row className="mb-2">
                                <Col xs={6}>
                                    <div className="my-2">
                                        <small>
                                            <AccountBoxTwoTone className="mr-1"/>
                                            Audeta Sandy
                                        </small>
                                    </div>

                                    <div className="my-2">
                                        <small>
                                            <EmailTwoTone className="mr-1"/>
                                            audeta35@gmail.com
                                        </small>
                                    </div>

                                    <div className="my-2">
                                        <small>
                                            <AccountBalanceWalletTwoTone className="mr-1"/>
                                            Bayar di Tempat 
                                        </small>
                                    </div>
                                </Col>

                                <Col xs={6}>
                                    <div className="my-2">
                                        <small>
                                            Jln. Apel, <br/>
                                            Villa Surya Jaya <br />
                                            Blok AA6 No 43 08/09 <br />
                                            Cileungsi, Bogor, Jawa Barat
                                        </small>
                                    </div>
                                </Col>
                            </Row>

                            <Divider />

                            <Table size="sm" className="bg-white" borderless hover striped>
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>#</th>
                                        <th>Jasa {this.state.serviceName}</th>
                                        <th>Satuan</th>
                                        <th>harga (Rp)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {   
                                    this.state.product.map(res => (

                                    <tr key={res.id}>
                                      <th scope="row">{this.state.number++}</th>
                                      <td> {res.name} <b>({res.id})</b> </td>
                                      <td> {res.pcs} </td>
                                      <td> {res.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </td>
                                    </tr>

                                    ))
                                }
                                </tbody>
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th colspan={3} className="text-center">Jumlah Pembayaran</th>
                                        <th>Rp 290.000</th>
                                    </tr>
                                </thead>
                            </Table>

                            <Divider />

                            <Row>
                                <Col xs={5}>
                                    <ListItem>
                                        <TodayTwoTone className="mr-2" />
                                        <ListItemText 
                                            primary="Dipesan" 
                                            secondary={
                                                <Badge color="primary">03/04/2020</Badge>
                                            } 
                                        />
                                    </ListItem>
                                </Col>

                                <Col xs={7}>
                                    <ListItem>
                                        <EventTwoTone className="mr-2" />
                                        <ListItemText 
                                            primary="Dikerjakan" 
                                            secondary={
                                                <Badge color="primary">03/04/2020 13.00</Badge>
                                            } 
                                        />
                                    </ListItem>
                                </Col>
                            </Row>
                        
                             <Divider />
                        </CardBody>
                    </Card>

                    <ListItem className="bg-primary text-white mb-3">
                        <ListItemText primary="Status Invoce :"/>
                        <Badge color="light">
                            Selesai Dikerjakan
                        </Badge>
                    </ListItem>
                </Container>
            </Fragment>
		)
	}
}

export default withRouter(invoice);