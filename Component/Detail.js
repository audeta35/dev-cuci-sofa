import React, { useState } from 'react';
import { ExpandLess, ExpandMore, ReceiptTwoTone, AccountBalanceTwoTone, LocalAtmTwoTone, AddBoxTwoTone, IndeterminateCheckBoxTwoTone, LocalMallTwoTone } from '@material-ui/icons';
import { Container, Dialog, AppBar, Toolbar, IconButton, Typography, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Card, CardImg, CardBody, CardTitle, Collapse, Row, Col, Button, Badge } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

const Detail = (props) => {

    const [numOrder, setOrder] = useState(0); 

    const setNumOrder = (statement) => {

        if(statement === "plus"){

            setOrder(numOrder + 1);
            props.addTotalPrice(props.price)
        }

        else if (statement == "minus") {

            if(numOrder > 0) {

                setOrder(numOrder - 1)
                props.clrTotalPrice(props.price)
            }
        }
    }

	return (

        <ListItem className="shadow-sm rounded">
            <ListItemText primary={props.item} secondary={`Rp ${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / ${props.pcs}`} />
            <IndeterminateCheckBoxTwoTone onClick={() => setNumOrder("minus")} className="text-danger" />
            <Badge className="mx-2" color="info">
                {numOrder}
            </Badge>
            <AddBoxTwoTone onClick={() => setNumOrder("plus")} className="text-success" />
        </ListItem>
    )
}

export default Detail;