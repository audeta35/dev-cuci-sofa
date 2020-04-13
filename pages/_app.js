import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';

import grey from '@material-ui/core/colors/grey';
import 'bootstrap/dist/css/bootstrap.min.css';

import Loading from '../Component/Loading';
import AppBars from '../Component/AppBars';


class CuciSofa extends App {

    constructor(props) {

        super(props);
        this.state = {

            isLoading : true,
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
            
            <Fragment>
                <Head>
                    <title>Jasa Cuci Sofa</title>
                    <meta name="theme-color" content="#17a2b8" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {
                    this.state.isLoading 
                    
                    ? 

                    <Loading />

                    :

                    <Fragment>
                        <Component {...pageProps} />
                        <AppBars />
                    </Fragment>
                }
            </Fragment>
        )
    }
}

export default withRouter(CuciSofa);