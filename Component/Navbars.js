import React, { Fragment } from 'react';
import Router from 'next/router';
import { Container, IconButton } from '@material-ui/core';
import { ArrowBack, KingBedOutlined } from '@material-ui/icons';
import {
    Navbar,
    NavbarBrand,
    Row,
} from 'reactstrap';

const Navbars = (props) => {

    const pushRouter =  () => {
       
        Router.back()    
    }

    return (

        <Fragment>
            <Navbar className="sticky-top shadow-sm" color="info" dark expand="md">
                <Container maxWidth="xs">
                    <Row>
                        <NavbarBrand className="text-white">
                            {
                                props.stack ? 
                                    <IconButton onClick={() => pushRouter()} className="bg-info" size="small">
                                        <ArrowBack className="text-white" />
                                    </IconButton >
                                : <KingBedOutlined className="mr-1" />
                            }

                            <b> {props.navbrand} </b>
                            
                        </NavbarBrand>
                    </Row>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Navbars;