import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

class CuciSofa extends App {

    render() {
        
        const { Component, pageProps } = this.props;
        
        return (
            
            <Fragment>
                <Head>
                    <title>Jasa Cuci Sofa</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Component {...pageProps} />
            </Fragment>
        )
    }
}

export default CuciSofa;