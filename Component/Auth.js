import React, { Fragment } from 'react';
import {useRouter} from 'next/router';
import { PersonTwoTone, PersonAddTwoTone, HelpTwoTone, ReportTwoTone } from '@material-ui/icons';
import { List, ListItem } from '@material-ui/core';

const Auth = () => {

    const router = useRouter();

    const pushLink = (link) => {

        router.push(link)
    }

    return (

        <Fragment>

            <List className="text-secondary">
                <ListItem button className="my-3" onClick={() => pushLink('/daftar')}>
                    <PersonAddTwoTone className="mb-1 mr-2" /> Daftar
                </ListItem>

                <ListItem button className="my-3" onClick={() => pushLink('/masuk')}>
                    <PersonTwoTone className="mb-1 mr-2" /> Masuk
                </ListItem>

                <ListItem button className="my-3" onClick={() => pushLink('/')}>
                    <HelpTwoTone className="mb-1 mr-2" /> Tentang kami
                </ListItem>

                <ListItem button className="my-3" onClick={() => pushLink('/')}>
                    <ReportTwoTone className="mb-1 mr-2" /> Syarat dan ketentuan
                </ListItem>

            </List>

        </Fragment>
    )
}

export default Auth;