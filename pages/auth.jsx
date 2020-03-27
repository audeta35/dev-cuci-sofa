import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';

import Navbars from '../Component/Navbars';

class Auth extends Component {

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Menu Auth" />
                <h1>Halaman Auth</h1>
            </Fragment>
        )
    }
}

export default withRouter(Auth);