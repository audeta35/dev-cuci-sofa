import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Navbars from '../Component/Navbars';

class Masuk extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Menu Masuk" />
                <h1>Halaman Masuk</h1>
            </Fragment>
        )
    }
}

export default withRouter(Masuk);