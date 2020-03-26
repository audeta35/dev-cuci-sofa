import React, { useEffect } from 'react';
import { KingBedOutlined } from '@material-ui/icons';

const Loading = () => {

    return (

        <div className="bg-info" style={{position: 'fixed', width: '100%', height: '100%', }}>
            <div className="row align-items-center h-100">
                <div className="col-12 text-center text-white mx-auto">

                    <h1>
                        <b>Cuci Sofa</b>
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default Loading;