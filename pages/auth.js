import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import { PersonTwoTone, PersonAddTwoTone, HelpTwoTone, ReportTwoTone } from '@material-ui/icons';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Navbars from '../Component/Navbars';

class Auth extends Component {

    render() {

        return (

            <Fragment>

                <Navbars navbrand="Akun" stack={true}  />
				<h2 className="text-center text-info my-5">Cuci Sofa</h2>
				
				<div className="mx-4 text-secondary">
					<div className="my-4">
						<PersonAddTwoTone className="mb-1 mr-2" /> Daftar
					</div>
					<div className="my-4">
						<PersonTwoTone className="mb-1 mr-2" /> Masuk
					</div>
					<div className="my-4">
						<HelpTwoTone className="mb-1 mr-2" /> Tentang kami
					</div>
					<div className="my-4">
						 <ReportTwoTone className="mb-1 mr-2" /> Syarat dan ketentuan
					</div>
				</div>
					
            </Fragment>
        )
    }
}

export default Auth;