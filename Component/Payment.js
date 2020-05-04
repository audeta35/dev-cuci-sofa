import React, { useState } from 'react';

import { Dialog, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AccountBalance, Money } from '@material-ui/icons';

const Payment = (props) => {

  const setPayment = (payment) => {

    props.paymentMethod(payment);
  }

  const setIsOpen = () => {

    props.eventDialog()
  }

	return (

    <Dialog maxWidth="xs" fullscreen open={props.isOpen} onClose={() => setIsOpen()}>
      <List>
        <ListItem onClick={() => setPayment("Bayar di Tempat")} button>

          <ListItemAvatar>
            <Avatar className="bg-primary">
              <Money />
            </Avatar>
            </ListItemAvatar>

          <ListItemText primary="Bayar di Tempat" secondary="Bayar ketika selesai dikerjakan" />

        </ListItem>
      </List>
    </Dialog>
	)
} 

export default Payment;