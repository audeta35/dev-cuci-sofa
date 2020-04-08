import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Navbars from '../Component/Navbars';
import { Container } from '@material-ui/core';

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
                     <h2>Halaman Pesanan</h2>
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(Pesanan);
