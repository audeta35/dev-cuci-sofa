import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';

import Navbars from '../Component/Navbars';

class Daftar extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Menu Daftar" />
                <h1>Halaman Daftar</h1>
            </Fragment>
        )
    }
}

export default Daftar;