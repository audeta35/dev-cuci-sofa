import React, {Component, Fragment} from 'react';
import { Divider } from '@material-ui/core';
import { MonetizationOnTwoTone, SupervisedUserCircleTwoTone, ReceiptOutlined } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { Card, CardBody, CardFooter, Media, Row, Col, Button } from 'reactstrap';

import carpet from '../../assets/services/carpet.jpg';
import Navbars from '../../Component/Navbars';

class Produk extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Kategori Jasa" stack={true} />
                <Container maxWidth="xs">
                    <div className="text-center my-3">
                        <img src={carpet} className="img-thumbnail" width={250} height={100} />
                    </div>

                    <div className="text-center text-secondary">
                        <h4>Jasa Cuci Karpet</h4>
                    </div>

                    <Divider />
                    
                </Container>
            </Fragment>
        )
    }
}

export default Produk;