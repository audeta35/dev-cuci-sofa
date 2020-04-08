import React, { Fragment } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
    Button, Badge,
} from 'reactstrap';

const Services = (props) => {
    return (
        <Fragment>
            <Card color="light">
                
                <img className="card-img-top" width={100} height={90} src={props.image} alt={props.title} />
                <span className="badge badge-info" style={{position: "absolute"}}>
                    <i style={{ textDecoration: "line-through" }}>Rp.45.000</i>
                </span>
                
                <Button color="info" className="stretched-link" size="sm" outline>Rp.30.000</Button>

            </Card>
        </Fragment>
    );
};

export default Services;
