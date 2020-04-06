import React, { useState, Fragment } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { Container } from '@material-ui/core';
import { HomeOutlined, ShopTwoOutlined, AccountCircleOutlined, KingBedOutlined } from '@material-ui/icons';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row,
} from 'reactstrap';

const Navbars = (props) => {

    let router = useRouter();
    let [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => {

        if(router.pathname === path) {

            return true;
        }

        else {

            return false;
        }
    }

    return (

        <Fragment>
            <Navbar className="sticky-top shadow" color="info" dark expand="md">
                <Container maxWidth="xs">
                    <Row>
                        <NavbarBrand className="text-white">
                            <KingBedOutlined className="mr-1" />
                            <b> {props.navbrand} </b>
                        </NavbarBrand>
                    </Row>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Navbars;