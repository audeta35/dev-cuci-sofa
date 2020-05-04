import React, { useState } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeTwoTone, ReceiptTwoTone, AccountCircleTwoTone } from '@material-ui/icons';

import { useRouter } from 'next/router';


const AppBars = () => {

    let router = useRouter();

    const isActive = (path) => {

        if (router.pathname === path) {

            return "text-primary";
        }

        else {

            return "text-muted";
        }
    }

    const pushRoute = (event, newValue) => {

        router.replace(newValue)
    }

    return (

        <BottomNavigation maxWidth="xs" showLabels className="fixed-bottom shadow-sm" value={router.pathname} onChange={pushRoute}>
            <BottomNavigationAction className={isActive('/')} label="Beranda" value="/" icon={<HomeTwoTone />} />
            <BottomNavigationAction className={isActive('/pesanan')} label="Pesanan" value="/pesanan" icon={<ReceiptTwoTone />} />
            <BottomNavigationAction className={isActive('/akun')} label="Akun" value="/akun" icon={<AccountCircleTwoTone />}/>
        </BottomNavigation>
    )
}

export default AppBars;