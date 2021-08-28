import React, { useState } from 'react';

import { Dialog, Divider, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { HomeWork, Add } from '@material-ui/icons';

const Address = (props) => {

  const listAlamat = {

    "alamat" : [{

      "jenisAlamat" : "Rumah",
      "namaJalan" : "Jln. Apel",
      "cluster" : "Villa Surya Jaya",
      "nomorAlamat" : "Blok AA6 No.43",
      "RT" : "08",
      "RW" : "09",
      "atasNama" : "Audeta Sandy",
      "provinsi" : "Jawa Barat",
      "kabupaten" : "Bogor",
      "kecamatan" : "Cileungsi"

    },
    {

      "jenisAlamat" : "Kantor",
      "namaJalan" : "Jln. Apel",
      "cluster" : "Villa Surya Jaya",
      "nomorAlamat" : "Blok AA6 No.43",
      "RT" : "08",
      "RW" : "09",
      "atasNama" : "Audeta Sandy",
      "provinsi" : "Jawa Barat",
      "kabupaten" : "Bogor",
      "kecamatan" : "Cileungsi"

    }]
  }

  const setAddress = (address) => {

    props.getAddress(address);
  }

  const setIsOpen = () => {

    props.eventDialog()
  }

	return (

    <Dialog maxWidth="xs" fullscreen open={props.isOpen} onClose={() => setIsOpen()}>
      <List>

        {
          props?.alamatUser?.map((data) => {

            return(

            <ListItem onClick={() => setAddress(data)} button>

              <ListItemAvatar>
                <Avatar className="bg-primary">
                  <HomeWork />
                </Avatar>
              </ListItemAvatar>

              <ListItemText 
                primary={` ${data.jenisAlamat} - ${data.atasNama} `} 
                secondary={` ${data.namaJalan} ${data.cluster} ${data.nomorAlamat} `} 
              />

            </ListItem>

            )
          })
        }

        <Divider />
        <ListItem button>

          <ListItemAvatar>
            <Avatar className="bg-dark">
              <Add />
            </Avatar>
            </ListItemAvatar>

          <ListItemText primary="Tambah Alamat Baru" />

        </ListItem>

      </List>
    </Dialog>
	)
} 

export default Address;