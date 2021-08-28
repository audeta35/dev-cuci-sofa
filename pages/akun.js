import React, { Component, Fragment, useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { Container } from '@material-ui/core';

import Profile from '../Component/Profile';
import Auth from '../Component/Auth';
import Navbars from '../Component/Navbars';
import AppBars from '../Component/AppBars';
import LoadingBar from '../Component/LoadingBar';

const AkunPage = () => {

    let token = window.sessionStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(true);
    const [activeToken, setActiveToken] = useState("");
    useEffect(() => {
        if(token) {
            getToken();
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    const getToken = async () => {
        let url = `${window.location.origin}/api/auth/get-token?token=${token}`;
        let req = await fetch(url);
        let res = await req.json();

        setActiveToken(res.result[0].token);
    }
    
    return (

        <Fragment>
            <Navbars navbrand="Akun Saya" />
            <Container maxWidth="xs">
               {
                   isLoading ? <LoadingBar /> :
                     activeToken === token ? <Profile /> : <Auth />
               }
            </Container>
            <AppBars />
        </Fragment>
    )
}

export default withRouter(AkunPage);