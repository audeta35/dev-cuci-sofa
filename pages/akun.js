import React, { Component, Fragment } from 'react';

import { Container } from '@material-ui/core';

import Profile from '../Component/Profile';
import Auth from '../Component/Auth';
import Navbars from '../Component/Navbars';
import AppBars from '../Component/AppBars';

class Akun extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Akun Saya" />
                <Container maxWidth="xs">
                    { localStorage.getItem('isLogin') ? <Profile /> : <Auth /> }
                </Container>
                <AppBars />
            </Fragment>
        )
    }
}

export default Akun;