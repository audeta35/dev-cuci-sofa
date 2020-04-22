import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Navbars from '../Component/Navbars';
import { Container, Divider } from '@material-ui/core';
import { EventTwoTone, MonetizationOnTwoTone, SupervisedUserCircleTwoTone } from '@material-ui/icons';
import seat from '../assets/services/seat.jpg';
import { Card, CardHeader, CardBody, CardFooter, Media, Row, Col } from 'reactstrap';
import Invoice from '../Component/Invoice';

class Pesanan extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isLoading : true,
        }
    }

    componentDidMount() {

        this.setState({isLoading: false})
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Pesanan" />
                <Container maxWidth="xs">
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                </Container>
                <br />
                <br />
                <br />
            </Fragment>
        )
    }
}

export default Pesanan;
