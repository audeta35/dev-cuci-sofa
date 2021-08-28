import React, { Component, Fragment, useState } from 'react';
import { Container, TextField, Button, CircularProgress } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import Navbars from '../Component/Navbars';
import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import { Alert } from 'reactstrap';

const MasukPage = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [alert, isAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const pushRoute = (link) => {
        router.replace(link)
    }

    const onChangeInput = (e, key) => {
        setState({
            ...state,
            [key]: e.target.value
        })
    }

    const onSubmitButton = async () => {
        
        isAlert(false)
        setAlertMessage("")
        setIsLoading(true)

        window.sessionStorage.clear();

        let url = `${window.location.origin}/api/auth/login?email=${state.email}&password=${state.password}`;
        let req = await fetch(url)
        let res = await req.json();

        if (res?.status === 403) {
            setState({
                ...state,
                password: "",
            })

            setAlertMessage(res.message)
            isAlert(true)
            window.sessionStorage.setItem('isLogin', false)
            setIsLoading(false)
        } else {
            window.sessionStorage.setItem('token', res.result[0].token)
            setState({
                email: "",
                password: ""
            })
            pushRoute('/akun')
            setIsLoading(false)
        }
    }

    return (
        <Fragment>
            <Navbars navbrand="Masuk" stack={true} />
            <Container maxWidth="xs">
                <Alert color="danger" isOpen={alert} toggle={() => isAlert(false)}>
                    {alertMessage}
                </Alert>
                <Row className="my-2">
                    <Col md={12} className="my-3">
                        <TextField label="Alamat Email" value={state?.email} fullWidth variant="filled" onChange={(e) => onChangeInput(e, 'email')} />
                    </Col>
                    <Col md={12} className="my-3">
                        <TextField label="Password" value={state?.password} fullWidth variant="filled" type="password" onChange={(e) => onChangeInput(e, 'password')} />
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col md={12}>
                        <Button variant="contained" color="primary" size="large" disabled={isLoading} fullWidth onClick={onSubmitButton}>
                            Masuk
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default MasukPage;