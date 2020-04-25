import React, { Component, Fragment } from 'react';

import { Container } from '@material-ui/core';
import Navbars from '../Component/Navbars';

class daftar extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Daftar" stack={true} />
                <Container maxWidth="xs">
                    
                </Container>
            </Fragment>
        )
    }
}

export default daftar;