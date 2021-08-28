import React, {Fragment, useEffect, useState} from 'react';

import { Avatar, Container, IconButton, makeStyles } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import cleaner from '../assets/user/cleaner.png';
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
    largeImage: {
        width: 150,
        height: 150,
        fontSize: 100,
    },
}));

const Profile = () => {

    const classes = useStyles();
    const [state, setState] = useState({})
    const router = useRouter();

    useEffect(() => {
        getUserByToken();
    }, [])

    const getUserByToken = async () => {
        let url = `${window.location.origin}/api/users/getByToken?token=${window.sessionStorage.getItem('token')}`
        let req = await fetch(url)
        const res = await req.json();
        console.log("res", res)
        setState(res.result[0]);
    }

    const logOut = () => {
        sessionStorage.clear();
        router.replace('/masuk')
    }

	return (

        <Fragment maxWidth="xs">
            <Row>
                <Col className="text-center mt-5 mb-5" md={12}>
                    <div className="d-flex justify-content-center">
                        <Avatar className={`${classes.largeImage}`}>
                            {state?.username?.substring(0, 1)}
                        </Avatar>
                    </div>
                    <IconButton onClick={() => logOut()} className="bg-danger text-white mr-4" style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <ExitToApp />
                    </IconButton>
                </Col>
            </Row>

            <Row className="bg-white">
                <Col xs={12} className="mt-3 mb-3">
                    <b className="text-muted">username</b>
                    <i className="float-right text-muted">{state?.username}</i>
                </Col>

                <Col xs={12} className="mt-3 mb-3">
                    <b className="text-muted">alamat email</b>
                    <i className="float-right text-muted">{state?.email}</i>
                </Col>

                <Col xs={12} className="mt-3 mb-3">
                    <b className="text-muted">nomor telepon</b>
                    <i className="float-right text-muted">{state?.phone}</i>
                </Col>

                <Col xs={12} className="mt-3 mb-3">
                    <b className="text-muted">alamat</b>
                    <Button className="float-right" color="primary" size="sm" outline>
                        detail
                    </Button>
                </Col>
            </Row>

        </Fragment>

    )
}

export default Profile;