import React, { Component, Fragment } from 'react';

import { Container } from '@material-ui/core';
import Navbars from '../Component/Navbars';

const DaftarPage = () => {

    return (

        <Fragment>
            <Navbars navbrand="Daftar" stack={true} />
            <Container maxWidth="xs">

            </Container>
        </Fragment>
    )
}

export default DaftarPage;