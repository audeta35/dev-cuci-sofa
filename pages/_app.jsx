import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../Component/Loading';

class CuciSofa extends App {

    constructor(props) {

        super(props);
        this.state = {

            isLoading : true,
        }
    }

    componentDidMount() {

        this.setState({isLoading: false})
    }

    render() {
        
        const { Component, pageProps } = this.props;
        
        return (
            
            <Fragment>
                <Head>
                    <title>Jasa Cuci Sofa</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {
                    this.state.isLoading ? 

                    <Loading />

                    : <Component {...pageProps} /> 
                }
            </Fragment>
        )
    }
}

export default CuciSofa;