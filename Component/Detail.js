import React, { useState } from 'react';
import { ExpandLess, ExpandMore, ReceiptTwoTone, AccountBalanceTwoTone, LocalAtmTwoTone, AddBoxTwoTone, IndeterminateCheckBoxTwoTone, LocalMallTwoTone } from '@material-ui/icons';
import { Container, Dialog, AppBar, Toolbar, IconButton, Typography, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Card, CardImg, CardBody, CardTitle, Collapse, Row, Col, Button, Badge } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

const Detail = (props) => {

    const [numOrder, setOrder] = useState(0); 

    const setNumOrder = (statement) => {

        if(statement === "plus"){

            const itemOrder = numOrder + 1;
            setOrder(itemOrder);
            props.addTotalPrice(props.price, props.getDetailItem, itemOrder);
        }

        else if (statement == "minus") {

            if(numOrder > 0) {
                const itemOrder = numOrder - 1;
                setOrder(itemOrder)
                props.clrTotalPrice(props.price, props.getDetailItem, itemOrder);
            }
        }
    }

	return (

        <ListItem className="shadow-sm rounded">
            <ListItemText primary={props.name} secondary={`Rp ${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / ${props.pcs}`} />
            <IndeterminateCheckBoxTwoTone onClick={() => setNumOrder("minus")} className="text-primary" />
            <Badge className="mx-2" color="primary">
                {numOrder}
            </Badge>
            <AddBoxTwoTone onClick={() => setNumOrder("plus")} className="text-primary" />
        </ListItem>
    )
}

export default Detail;