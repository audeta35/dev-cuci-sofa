import React, { useEffect } from 'react';
import { KingBedOutlined } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';

const LoadingBar = () => {

    return (

        <div className="bg-white">
            <div className="row align-items-center h-100">
                <div className="col-12 text-center text-white mx-auto mt-5">

                    <h1>
                        <b><CircularProgress/></b>
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default LoadingBar;