import React, { Component, Fragment, forwardRef } from 'react';

import { ExpandLess, ExpandMore, ReceiptTwoTone, AccountBalanceTwoTone, LocalAtmTwoTone, AddBoxTwoTone, IndeterminateCheckBoxTwoTone, LocalMallTwoTone, ScheduleTwoTone } from '@material-ui/icons';
import { Container, Dialog, AppBar, Toolbar, IconButton, Typography, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar, Chip } from '@material-ui/core';
import { Card, CardImg, CardBody, CardTitle, Collapse, Row, Col, Button, Badge } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';

import sofa from '../assets/services/sofa.jpg';
import Navbars from '../Component/Navbars';
import Detail from '../Component/Detail';

class jasa extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isOpen : false,
            isOrder : false,
            product : [{
                price : 40000,
                pcs : "item",
                item : "Sofa"
            },
            {
                price : 160000,
                pcs : "item",
                item : "Sofa Bed"
            },
            {
                price : 10000,
                pcs : "item",
                item : "Bantal Sofa"
            }],
            time: ["08:30", "10:30", "12:30", "14:30"],
            timeOrder : "00:00",
            dateOrder : new Date(),
            minDateOrder : new Date().setDate(new Date().getDate() + 1),
            maxDateOrder : new Date().setDate(new Date().getDate() + 4),
            payMethod : null,
            price : 35000,
            totalPrice : 0,
            pcs : "meter",
        }

    }

    componentDidMount() {

        // console.log(new Date(this.state.maxDateOrder));
    }

    _setDateOrder = (date) => {

        this.setState({dateOrder: date})
    }

    _setTimeOrder = (hour) => {

        this.setState({timeOrder : hour})
    }

    _setCollapse = () => {
        let statement = !this.state.isOpen
        this.setState({isOpen: statement})
    }

    _setOrder = () => {
        let statement = !this.state.isOrder
        this.setState({isOrder: statement})
    }

    _setPayment = (payment) => {

        this.setState({payMethod: payment});
        this._setOrder();
    }

    _addTotalPrice = (harga) => {

        let total = this.state.totalPrice;
        this.setState({totalPrice: total + harga})
    }

    _clrTotalPrice = (harga) => {

        let total = this.state.totalPrice;
        this.setState({totalPrice: total - harga})
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Jasa Cuci Sofa Berkualitas" stack={true} />
                <Container maxWidth="xs">
                    <Card className="my-2">
                        <CardBody>
                            <Row>

                                <Col xs={12} className="text-light my-2">
                                    <ListItem className="shadow-sm text-dark rounded" button onClick={() => this._setCollapse()}>
                                        <ListItemText primary="Deskripsi" />
                                        {this.state.isOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                
                                    <Collapse isOpen={this.state.isOpen}>
                                        <Card className="border-0">
                                            <CardBody className="text-muted shadow-sm">
                                                Jasa cuci sofa dan springbed kami menggunakan alat modern yang paling muktahir untuk perawatan terbaik bahan sofa anda. 
                                                Kami menggunakan Shampo Khusus sehingga hasil pengerjaan akan sangat berkualitas, bersih dan tidak bau apek. 
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>

                                {
                                    this.state.product.map(res => {

                                        return (

                                            <Col xs={12} className="my-2">
                                                <Detail 
                                                    addTotalPrice={(harga) => this._addTotalPrice(harga)}
                                                    clrTotalPrice={(harga) => this._clrTotalPrice(harga)} 
                                                    total={this.state.totalPrice} 
                                                    item={res.item} price={res.price} 
                                                    pcs={res.pcs}
                                                />
                                            </Col>
                                        )
                                    })
                                }

                                <Col xs={12}>
                                    <Calendar 
                                        className="my-3 shadow-sm border-0 rounded"
                                        onChange={this._setDateOrder}
                                        value={this.state.dateOrder}
                                        minDate={new Date(this.state.minDateOrder)}
                                        maxDate={new Date(this.state.maxDateOrder)}
                                        showNavigation={false}
                                     />
                                </Col>

                                <Col xs={12} className="mb-3 text-center">
                                {
                                    this.state.time.map((hour) => {
                                        return (

                                            <Chip
                                            className={
                                                this.state.timeOrder === hour 
                                                ? 'm-1 shadow-sm text-white bg-primary' : 'm-1'
                                            }
                                            variant="outlined"
                                            label={hour}
                                            onClick={() => this._setTimeOrder(hour)}
                                            />

                                            )
                                    })
                                }
                                </Col>                     

                                <Col xs={7}>

                                    {
                                        this.state.payMethod ?  
                                        
                                        <ListItem className="shadow-sm text-info text-center rounded" onClick={() => this._setOrder()} button>
                                            <ReceiptTwoTone className="mr-1" />
                                            <ListItemText primary={this.state.payMethod} />
                                        </ListItem>

                                        :

                                        <ListItem className="text-secondary text-center rounded" onClick={() => this._setOrder()} button>
                                            <ListItemText primary="pembayaran" />
                                        </ListItem>
                                    }

                                </Col>

                                <Col xs={5} >
                                    <ListItem className="text-secondary text-center rounded" button>
                                        <ListItemText primary="Alamat" />
                                    </ListItem>
                                </Col>

                                <Col xs={12} className="my-2">

                                    {
                                        this.state.totalPrice === 0 ?

                                        <ListItem className="text-secondary rounded">
                                            <ListItemText 
                                                primary="Total Harga"
                                                secondary={
                                                    <Badge color="dark">Rp {this.state.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Badge>
                                                } 
                                            />

                                            <Button outline color="dark" disabled>
                                                <LocalMallTwoTone className="mr-2" />
                                                Lanjutkan
                                            </Button>
                                        </ListItem>

                                        :

                                        <ListItem className="shadow-sm rounded">
                                            <ListItemText 
                                                primary="Total Harga"
                                                secondary={
                                                    <Badge color="info">Rp {this.state.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Badge>
                                                } 
                                            />

                                            <Button outline color="success">
                                                <LocalMallTwoTone className="mr-2" />
                                                Lanjutkan
                                            </Button>
                                        </ListItem>
                                    }

                                </Col>
                                
                            </Row>
                        </CardBody>
                    </Card>
              
                    <Dialog maxWidth="xs" fullscreen open={this.state.isOrder} onClose={() => this._setOrder()}>
                        <List>
                            <ListItem onClick={() => this._setPayment("transfer bank")} button>

                                <ListItemAvatar>
                                  <Avatar className="bg-primary">
                                    <AccountBalanceTwoTone />
                                  </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary="transfer bank" secondary="pembayaran melalui transfer bank" />

                            </ListItem>
                            <Divider />
                            <ListItem onClick={() => this._setPayment("bayar di tempat")} button>

                                <ListItemAvatar>
                                  <Avatar className="bg-success">
                                    <LocalAtmTwoTone />
                                  </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary="bayar di tempat" secondary="Bayar ketika selesai dikerjakan" />

                            </ListItem>
                        </List>
                    </Dialog>
                </Container>
            </Fragment>
            )
    }
}

export default jasa;