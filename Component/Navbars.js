import React, { useState, Fragment } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router'; 

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
    Container
} from 'reactstrap';

const Navbars = (props) => {

    let router = useRouter();
    let [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const isActive = (path) => {

        if(router.pathname === path) {

            return "text-primary";
        }

        else {

            return "text-secondary";
        }
    }

    return (

        <Fragment>
            <Navbar className="sticky-top shadow" color="white" light  expand="md">
                <NavbarBrand>
                    <KingBedOutlined className="mr-1" />
                    <b>CuciSofa</b>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/">
                                <NavLink href="/" className={isActive('/')}>
                                    <HomeOutlined className="mr-1 mb-1" />
                                    Beranda
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/">
                                <NavLink href="/" className={isActive('/pesanan')}>
                                    <ShopTwoOutlined className="mr-1 mb-1" />
                                    Pesanan
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/">
                                <NavLink href="/" className={isActive('/akun')}>
                                    <AccountCircleOutlined className="mr-1 mb-1" />
                                    Akun Saya
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Navbars;