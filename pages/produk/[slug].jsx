import React, {Component, Fragment} from 'react';
import { Container } from '@material-ui/core';

import Navbars from '../../Component/Navbars';

class Produk extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Nama Produk/Jasa" stack={true} />
                <Container maxWidth="xs">
                </Container>
            </Fragment>
        )
    }
}

export default Produk;