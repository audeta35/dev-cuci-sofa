import React, { Component, Fragment } from 'react';
import Navbars from '../Component/Navbars';
import { Container } from '@material-ui/core';

class masuk extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Masuk" stack={true} />
                <Container maxWidth="xs">
                    
                </Container>
            </Fragment>
        )
    }
}

export default masuk;