import React, { useState } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeOutlined, ReceiptOutlined, AccountCircleOutlined } from '@material-ui/icons';

import { useRouter } from 'next/router';


const AppBars = () => {

    let router = useRouter();

    const isActive = (path) => {

        if (router.pathname === path) {

            return "text-info";
        }

        else {

            return "text-muted";
        }
    }

    const pushRoute = (event, newValue) => {

        router.push(newValue)
    }

    return (

        <BottomNavigation maxWidth="xs" showLabels className="fixed-bottom" value={router.pathname} onChange={pushRoute}>
            <BottomNavigationAction className={isActive('/')} label="Beranda" value="/" icon={<HomeOutlined />} />
            <BottomNavigationAction className={isActive('/pesanan')} label="Pesanan" value="/pesanan" icon={<ReceiptOutlined />} />
            <BottomNavigationAction className={isActive('/akun')} label="Akun" value="/akun" icon={<AccountCircleOutlined />}/>
        </BottomNavigation>
    )
}

export default AppBars;