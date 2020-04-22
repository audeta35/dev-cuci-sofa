import React, { Component, Fragment } from 'react';
import Navbars from '../Component/Navbars';
import { Container } from '@material-ui/core';

class Masuk extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Masuk" stack={true} />
                <Container maxWidth="sm">
                    <h2 className="text-info mt-5">Cuci Sofa</h2>
                </Container>
            </Fragment>
        )
    }
}

export default Masuk;