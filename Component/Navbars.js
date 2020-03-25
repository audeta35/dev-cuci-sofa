import React, { useState, Fragment } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { Container } from '@material-ui/core';
import { HomeOutlined, ShopTwoOutlined, AccountCircleOutlined, KingBedOutlined } from '@material-ui/icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

const Navbars = (props) => {

    let router = useRouter();
    let [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
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
            <Navbar className="sticky-top shadow-sm" color="info" dark expand="md">
                <Container maxWidth="sm">
                    <NavbarBrand className="text-white">
                        <KingBedOutlined className="mr-1" />
                        <b>CuciSofa</b>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Navbars;