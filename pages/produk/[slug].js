import React, {Component, Fragment} from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore, ShoppingCartTwoTone } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { Card, CardImg, CardBody, CardTitle, Collapse, Row, Col, Button } from 'reactstrap';

import carpet from '../../assets/services/carpet.jpg';
import Navbars from '../../Component/Navbars';

class Produk extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isOpen : false,
        }

    }

    _setCollapse = () => {
        let statement = !this.state.isOpen
        this.setState({isOpen: statement})
    }

    render() {

        return (

            <Fragment>
                <Navbars navbrand="Kategori Jasa" stack={true} />
                <Container maxWidth="xs">
                    <Card className="mt-3">
                        <CardImg top width="100%" height={350} src={carpet} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>
                                <h5 className="text-secondary">
                                    <b>
                                        Nama Produk atau Jasa
                                        </b>
                                </h5>
                            </CardTitle>
                            
                            <Row>
                                <Col xs={8} className="text-secondary">
                                    <ListItem button onClick={() => this._setCollapse()}>
                                        <ListItemText primary="Deskripsi" />
                                        {this.state.isOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                </Col>
                                <Col xs={4}>
                                    <Button outline block color="success">
                                        <ShoppingCartTwoTone />
                                    </Button>
                                </Col>
                            </Row>

                            <Collapse isOpen={this.state.isOpen}>
                                <Card>
                                    <CardBody className="text-muted">
                                        Jasa cuci sofa dan springbed kami menggunakan alat modern yang paling muktahir untuk perawatan terbaik bahan sofa anda. 
                                        Kami menggunakan Shampo Khusus sehingga hasil pengerjaan akan sangat berkualitas, bersih dan tidak bau apek. 
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </CardBody>
                    </Card>
                </Container>
            </Fragment>
            )
    }
}

export default Produk;