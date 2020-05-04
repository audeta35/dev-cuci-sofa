import React, { Fragment } from 'react';

import Link from 'next/link';
import {
    Card,CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle,
    Button, Badge,
} from 'reactstrap';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { BusinessCenterTwoTone } from '@material-ui/icons';

import {useRouter} from 'next/router';

import seat from '../assets/services/seat.jpg';

const Services = (props) => {

    const router = useRouter();
    const pushLink = () => {

        router.push('/jasa');
    }

    return (

        <Fragment>
            <ListItem button className="shadow-sm bg-white rounded text-primary" onClick={() => pushLink()}>
                <BusinessCenterTwoTone />
                <ListItemText 
                className="ml-3"
                primary={props.title} 
                secondary={
                    <small> {props.subtitle} </small>
                } 
                />
            </ListItem>  
        </Fragment>
    );
};

export default Services;
