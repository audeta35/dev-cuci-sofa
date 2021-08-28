import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router'
import grey from '@material-ui/core/colors/grey';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import Loading from '../Component/Loading';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
       
    },
});

class _app extends App {

    constructor(props) {

        super(props);
        this.state = {

            isLoading: true,
        }
    }

    componentDidMount() {

        setTimeout(() => {

            this.setState({ isLoading: false })
            document.body.style.backgroundColor = grey[100];
        }, 1500);

        console.log('root app')
    }

    render() {

        const { Component, pageProps } = this.props;

        return (

            <ThemeProvider theme={theme}>
                <Fragment>
                    <Head>
                        <title>Jasa Cuci Sofa</title>
                        <meta name="theme-color" content="#0068d7" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    {
                        this.state.isLoading

                            ?

                            <Loading />

                            :

                            <Fragment>
                                <Component {...pageProps} />
                            </Fragment>
                    }
                </Fragment>
            </ThemeProvider>

        )
    }
}

export default withRouter(_app);