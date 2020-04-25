import React, { Component, Fragment, forwardRef } from 'react';

import { ExpandLess, ExpandMore, ReceiptTwoTone, AccountBalanceTwoTone, LocalAtmTwoTone, AddBoxTwoTone, IndeterminateCheckBoxTwoTone, LocalMallTwoTone } from '@material-ui/icons';
import { Container, Dialog, AppBar, Toolbar, IconButton, Typography, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Card, CardImg, CardBody, CardTitle, Collapse, Row, Col, Button, Badge } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';


import carpet from '../assets/services/carpet.jpg';
import Navbars from '../Component/Navbars';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  }
}));

class jasa extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isOpen : false,
            isOrder : false,
            numOrder : 0,
            payMethod : null,
            price : 35000,
            totalPrice : 0,
            pcs : "meter",
        }

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

    _setNumOrder = (statement) => {

        let jml = this.state.numOrder;
        let harga = this.state.price; 
        let bayar = this.state.totalPrice;

        if(statement === "minus") {

            if(jml > 0){

                this.setState({
                    numOrder: jml - 1,
                    totalPrice: bayar - harga
                })
            }
        }

        else if (statement === "plus") {

            // if(jml < 0){}
            this.setState({
                numOrder: jml + 1,
                totalPrice: bayar + harga,
            })
        }
    }


    render() {

        return (

            <Fragment>
                <Navbars navbrand="Kategori Jasa" stack={true} />
                <Container maxWidth="xs">
                    <Card className="my-3">
                        <CardImg top width="100%" height={350} src={carpet} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>
                                <h5 className="text-secondary">
                                    <b>
                                        Jasa Cuci Karpet Berkualitas
                                    </b>
                                </h5>
                            </CardTitle>
                            
                            <Row>

                                <Col xs={12} className="my-2">
                                    <ListItem className="shadow-sm rounded">
                                        <ListItemText primary="Karpet" secondary={`Rp ${this.state.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / ${this.state.pcs}`} />
                                        <IndeterminateCheckBoxTwoTone onClick={() => this._setNumOrder("minus")} className="text-danger" />
                                        <Badge className="mx-2" color="info">
                                            {this.state.numOrder}
                                        </Badge>
                                        <AddBoxTwoTone onClick={() => this._setNumOrder("plus")} className="text-success" />
                                    </ListItem>
                                </Col>

                                <Col xs={12} className="text-light my-2">
                                    <ListItem className="bg-info" button onClick={() => this._setCollapse()}>
                                        <ListItemText primary="Deskripsi" />
                                        {this.state.isOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                
                                    <Collapse isOpen={this.state.isOpen}>
                                        <Card>
                                            <CardBody className="text-muted">
                                                Jasa cuci sofa dan springbed kami menggunakan alat modern yang paling muktahir untuk perawatan terbaik bahan sofa anda. 
                                                Kami menggunakan Shampo Khusus sehingga hasil pengerjaan akan sangat berkualitas, bersih dan tidak bau apek. 
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </Col>

                                <Col xs={12}>

                                    {
                                        this.state.payMethod ?  
                                        
                                        <Button block color="info" onClick={() => this._setOrder()}>
                                            {this.state.payMethod}
                                        </Button> 

                                        :

                                        <Button outline block color="info" onClick={() => this._setOrder()}>
                                            Pilih Metode Pembayaran
                                        </Button> 
                                    }
                                </Col>

                                <Col xs={12} className="my-2">
                                    <ListItem className="bg-info text-white rounded">
                                        <ListItemText 
                                            primary="Jumlah Pembayaran"
                                            secondary={
                                                <Badge color="light">Rp {this.state.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Badge>
                                            } 
                                        />

                                        <Button outline color="light">
                                            <LocalMallTwoTone className="mr-2" />
                                            Order
                                        </Button>
                                    </ListItem>
                                </Col>


                            </Row>

                        </CardBody>
                    </Card>
              
                    <Dialog maxWidth="xs" fullscreen open={this.state.isOrder} onClose={() => this._setOrder()}>
                        <List>
                            <ListItem onClick={() => this._setPayment("transfer bank")} button>

                                <ListItemAvatar>
                                  <Avatar className="bg-info">
                                    <AccountBalanceTwoTone />
                                  </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary="transfer bank" secondary="pembayaran melalui transfer bank" />

                            </ListItem>
                            <Divider />
                            <ListItem onClick={() => this._setPayment("bayar di tempat")} button>

                                <ListItemAvatar>
                                  <Avatar className="bg-info">
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