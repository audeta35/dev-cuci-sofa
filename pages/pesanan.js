import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Navbars from '../Component/Navbars';
import { Container, Divider } from '@material-ui/core';
import { EventTwoTone, MonetizationOnTwoTone, SupervisedUserCircleTwoTone } from '@material-ui/icons';
import seat from '../assets/services/seat.jpg';
import { Card, CardHeader, CardBody, CardFooter, Media, Row, Col } from 'reactstrap';
import ListInvoice from '../Component/ListInvoice';
import AppBars from '../Component/AppBars';

const PesananPage = () => {
    
    return (
        <Fragment>
            <Navbars navbrand="Pesanan" />
            <Container maxWidth="xs">
                <ListInvoice />
                <ListInvoice />
                <ListInvoice />
                <ListInvoice />
            </Container>
            <br />
            <br />
            <br />
            <AppBars />
        </Fragment>
    )
}

export default PesananPage;
