import React, { Component, Fragment } from 'react';

import { Container } from '@material-ui/core';
import Navbars from '../Component/Navbars';

class Daftar extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Daftar" stack={true} />
                <Container maxWidth="sm">
                    <h2 className="text-info mt-5">Cuci Sofa</h2>
                </Container>
            </Fragment>
        )
    }
}

export default Daftar;