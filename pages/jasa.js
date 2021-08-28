import React, { Component, Fragment, forwardRef } from 'react';
import { withRouter } from 'next/router';

import { ExpandLess, ExpandMore, HomeWorkTwoTone, AccountBalanceWalletTwoTone, AddBoxTwoTone, IndeterminateCheckBoxTwoTone, LocalMallTwoTone, ScheduleTwoTone } from '@material-ui/icons';
import { Container, Dialog, AppBar, Toolbar, IconButton, Typography, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar, Chip } from '@material-ui/core';
import { Card, CardImg, CardBody, CardTitle, Collapse, Row, Col, Button, Badge, Spinner } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

import Calendar from 'react-calendar';
import Toast from '../Component/Toast';
import sofa from '../assets/services/sofa.jpg';
import Navbars from '../Component/Navbars';
import Detail from '../Component/Detail';
import Payment from '../Component/Payment';
import Address from '../Component/Address';
import ButtonSub from '../Component/ButtonSub';

class jasa extends Component {

    constructor(props) {

        super(props);
        this.state = {
            token: window.sessionStorage.getItem('token'),
            alamatUsers: [],
            
            isOpen: false,
            isOrder: false,
            isAddress: false,
            isLoading: false,

            minPrice: 100000,
            time: ["08:00", "10:00", "13:00", "15:00"],
            minDateOrder: new Date().setDate(new Date().getDate() + 1),
            maxDateOrder: new Date().setDate(new Date().getDate() + 4),

            cart: {

                itemList: null,
                serviceName: "Cuci Sofa",
                getAddress: null,
                timeOrder: null,
                dateOrder: null,
                payMethod: null,
                totalPrice: 0,
            },

            product: [{
                id: 1,
                price: 40000,
                pcs: "item",
                name: "Sofa"
            },
            {
                id: 2,
                price: 160000,
                pcs: "item",
                name: "Sofa Bed"
            },
            {
                id: 3,
                price: 10000,
                pcs: "item",
                name: "Bantal Sofa"
            }],
        }

    }

    componentDidMount() {
        if(this.state?.token) {
            this._getAddressUser(this.state?.token)
        }
    }

    _getAddressUser = async (token) => {
        let url = `${window.location.origin}/api/users/getAddress?token=${token}`;
        let req = await fetch(url)
        const res = await req.json()
        this.setState({
            ...this.state,
            alamatUsers: JSON.parse(res.result[0].address)
        })
    }


    _setCollapse = () => {
        let statement = !this.state.isOpen
        this.setState({ isOpen: statement })
    }

    _setOrder = () => {
        let statement = !this.state.isOrder
        this.setState({ isOrder: statement })
    }

    _setAddress = () => {
        let statement = !this.state.isAddress;
        this.setState({ isAddress: statement })
    }

    _setDateOrder = (date) => {

        this.setState({
            cart: {
                ...this.state.cart,
                dateOrder: date
            }
        })
    }

    _setTimeOrder = (hour) => {

        this.setState({
            cart: {
                ...this.state.cart,
                timeOrder: hour
            }
        })
    }

    _setPayment = (payment) => {

        this.setState({
            cart: {

                ...this.state.cart,
                payMethod: payment
            }
        });

        this._setOrder();
    }

    _getAddress = (data) => {

        this.setState({
            cart: {

                ...this.state.cart,
                getAddress: data
            }
        });

        this._setAddress();
    }

    _addTotalPrice = (harga, data, numOrder) => {

        let total = this.state.cart.totalPrice;
        let items;

        if (this.state.cart.itemList) {

            items = this.state.cart.itemList;

            if (numOrder === 1) {

                items.push({

                    itemDetail: data,
                    itemOrder: numOrder,
                })
            }

            else {

                for (let i in items) {

                    if (items[i].itemDetail.id === data.id) {

                        items[i].itemOrder = numOrder;
                        break;
                    }

                }
            }

        } else {

            items = [];
            items.push({

                itemDetail: data,
                itemOrder: numOrder,
            })
        }

        this.setState({
            cart: {
                ...this.state.cart,
                totalPrice: total + harga,
                itemList: items
            }
        })

    }

    _clrTotalPrice = (harga, data, numOrder) => {

        let total = this.state.cart.totalPrice;
        let items = this.state.cart.itemList;

        this.setState({
            cart: {
                ...this.state.cart,
                totalPrice: total - harga
            }
        })

        if (numOrder === 0) {

            for (let i in items) {

                if (items[i].itemDetail === data) {

                    items.splice(i, 1);
                    break;
                }
            }
        }

        else {

            for (let i in items) {

                if (items[i].itemDetail.id === data.id) {

                    items[i].itemOrder = numOrder;
                    break;
                }
            }
        }
    }

    _setInvoice = () => {

        this.setState({
            isLoading: true,
            cart: {
                ...this.state.cart,
                serviceName: "Cuci Sofa",
            }
        })
    }

    render() {

        const { getAddress, timeOrder, dateOrder, payMethod, totalPrice } = this.state.cart;

        return (

            <Fragment>
                <Navbars navbrand="Jasa Cuci Sofa Berkualitas" stack={true} />
                <Container maxWidth="xs">
                    <Card className="my-2">
                        <CardBody>
                            <Row>

                                <Col xs={12} className="text-light my-2">
                                    <ListItem className="shadow-sm text-white bg-primary rounded" button onClick={() => this._setCollapse()}>
                                        <ListItemText primary="Deskripsi" />
                                        {this.state.isOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>

                                    <Collapse isOpen={this.state.isOpen}>
                                        <Card className="border-0">
                                            <CardBody className="text-muted shadow">
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
                                                    addTotalPrice={
                                                        (harga, data, numOrder) =>
                                                            this._addTotalPrice(harga, data, numOrder)
                                                    }
                                                    clrTotalPrice={(harga, data, numOrder) => this._clrTotalPrice(harga, data, numOrder)}
                                                    total={this.state.cart.totalPrice}
                                                    name={res.name}
                                                    price={res.price}
                                                    pcs={res.pcs}
                                                    getDetailItem={res}
                                                />
                                            </Col>
                                        )
                                    })
                                }

                                <Col xs={12} className="my-3 text-center">
                                    {
                                        this.state.time.map((hour) => {
                                            return (

                                                <Chip
                                                    className={
                                                        this.state.cart.timeOrder === hour
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

                                <Col xs={12} className="align-items-center">
                                    <Calendar
                                        className="mb-3 shadow-sm border-0 rounded"
                                        onChange={this._setDateOrder}
                                        value={this.state.cart.dateOrder}
                                        minDate={new Date(this.state.minDateOrder)}
                                        maxDate={new Date(this.state.maxDateOrder)}
                                        showNavigation={false}
                                    />
                                </Col>

                                <Col xs={12} className="my-2">

                                    {
                                        this.state.cart.payMethod ?

                                            <ListItem className="shadow-sm border border-primary text-primary rounded" onClick={() => this._setOrder()} button>
                                                <ListItemAvatar>
                                                    <Avatar className="bg-white text-primary">
                                                        <AccountBalanceWalletTwoTone />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={this.state.cart.payMethod}
                                                    secondary={`Pesanan minimal Rp ${this.state.minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}
                                                />
                                            </ListItem>

                                            :

                                            <ListItem className="shadow-sm text-secondary text-center rounded" onClick={() => this._setOrder()} button>
                                                <ListItemText primary="Metode Pembayaran" />
                                            </ListItem>
                                    }

                                    <Payment
                                        isOpen={this.state.isOrder}
                                        eventDialog={() => this._setOrder()}
                                        paymentMethod={(data) => this._setPayment(data)}
                                    />

                                </Col>

                                <Col xs={12} className="my-2">

                                    {
                                        this.state.cart.getAddress ?

                                            <ListItem className="text-primary border border-primary shadow-sm rounded" onClick={() => this._setAddress()} button>
                                                <ListItemAvatar>
                                                    <Avatar className="bg-white text-primary">
                                                        <HomeWorkTwoTone />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={` ${this.state.cart.getAddress.jenisAlamat} `}
                                                    secondary={
                                                        <small className="text-primary">
                                                            {` ${this.state.cart.getAddress.namaJalan} ${this.state.cart.getAddress.cluster} ${this.state.cart.getAddress.nomorAlamat} `}
                                                        </small>
                                                    }
                                                />
                                            </ListItem>

                                            :

                                            <ListItem className="text-secondary shadow-sm text-center rounded" onClick={() => this._setAddress()} button>
                                                <ListItemText primary="Pilih Alamat" />
                                            </ListItem>

                                    }

                                    <Address
                                        isOpen={this.state.isAddress}
                                        eventDialog={() => this._setAddress()}
                                        getAddress={(data) => this._getAddress(data)}
                                        alamatUser={this?.state?.alamatUsers}
                                    />

                                </Col>

                                <Col xs={12} className="my-3">

                                    {
                                        getAddress && timeOrder && payMethod && dateOrder && totalPrice > this.state.minPrice ?

                                            <ListItem className="shadow-sm rounded">
                                                <ListItemText
                                                    primary="Total Harga"
                                                    secondary={
                                                        <Badge color="primary">Rp {this.state.cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Badge>
                                                    }
                                                />

                                                <ButtonSub
                                                    cart={this.state.cart}
                                                    _setInvoice={() => this._setInvoice}
                                                />
                                            </ListItem>

                                            :

                                            <ListItem className="text-secondary shadow-sm rounded">
                                                <ListItemText
                                                    primary="Total Harga"
                                                    secondary={
                                                        <Badge color="light">Rp {this.state.cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Badge>
                                                    }
                                                />

                                                <Button outline color="primary" disabled>
                                                    <LocalMallTwoTone className="mr-2" />
                                                    Lanjutkan
                                                </Button>
                                            </ListItem>
                                    }

                                </Col>

                            </Row>
                        </CardBody>
                    </Card>

                </Container>
            </Fragment>
        )
    }
}

export default withRouter(jasa);