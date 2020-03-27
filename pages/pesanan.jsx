import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Navbars from '../Component/Navbars';

class Pesanan extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isLoading : true,
        }
    }

    componentDidMount() {

        this.setState({isLoading: false})
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Pesanan" />
                <h1>Halaman Pesanan</h1>
            </Fragment>
        )
    }
}

export default withRouter(Pesanan);