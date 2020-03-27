import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';

import Navbars from '../Component/Navbars';

class Akun extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Akun Saya" />
                <h1>Halaman Akun</h1>
            </Fragment>
        )
    }
}

export default withRouter(Akun);