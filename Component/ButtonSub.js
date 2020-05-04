import React, {useState, useEffect, Fragment} from 'react';
import Router from 'next/router';
import {LocalMallTwoTone} from '@material-ui/icons';
import {Button, Spinner} from 'reactstrap';

const ButtonSub = (props) => {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        props._setInvoice();
    })

    const setInvoice = () => {
        setIsLoading(true)
        Router.replace({
            pathname : '/invoice',
            query : {
                service_name: props.cart.serviceName,
                time_order: props.cart.timeOrder,
                date_order: props.cart.dateOrder,
                total_price: props.cart.totalPrice,
            },
        });
    }

	return (

        <Fragment>
        {
            isLoading ? 

            <Button disabled color="primary">
                <Spinner size="sm" className="mr-2" />
                Lanjutkan
            </Button>

            :

            <Button color="primary" onClick={() => setInvoice()}>
                <LocalMallTwoTone className="mr-2" />
                Lanjutkan
            </Button>
        }
        </Fragment>
	)
}

export default ButtonSub;