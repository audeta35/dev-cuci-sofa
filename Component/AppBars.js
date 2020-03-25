import React, { useState } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeOutlined, ShopTwoOutlined, AccountCircleOutlined, KingBedOutlined } from '@material-ui/icons';


const AppBars = () => {

    let [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <BottomNavigation showLabels className="fixed-bottom bg-light" value={value} onChange={handleChange} >
            <BottomNavigationAction className="text-info" label="Recents" value="recents" icon={<HomeOutlined />} />
            <BottomNavigationAction className="text-info" label="Favorites" value="favorites" icon={<ShopTwoOutlined />} />
            <BottomNavigationAction className="text-info" label="Nearby" value="nearby" icon={<AccountCircleOutlined />}/>
        </BottomNavigation>
    )
}

export default AppBars;