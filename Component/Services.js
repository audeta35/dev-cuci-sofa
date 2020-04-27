import React, { Fragment } from 'react';
import Link from 'next/link';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
    Button, Badge,
} from 'reactstrap';

import Router from 'next/router';

const Services = (props) => {

    return (

        <Fragment>
            <Link href="/jasa">
                <Card color="light">

                    <img className="card-img-top" width={100} height={90} src={props.image} alt={props.title} />
                    <span className="badge badge-info" style={{ position: "absolute" }}>
                        <i style={{ textDecoration: "line-through" }}> Rp {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </i>
                    </span>

                    <Button color="info" className="stretched-link" size="sm" outline>Rp {props.dicount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </Button>

                </Card>           
            </Link>
        </Fragment>
    );
};

export default Services;
