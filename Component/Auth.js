import React, { Fragment } from 'react';
import {useRouter} from 'next/router';
import { PersonTwoTone, PersonAddTwoTone, HelpTwoTone, ReportTwoTone } from '@material-ui/icons';

const Auth = () => {

    const router = useRouter();

    const pushLink = (link) => {

        router.push(link)
    }

    return (

        <Fragment>

            <h2 className="text-center text-info my-5">Cuci Sofa</h2>

            <div className="mx-1 text-secondary">
                <div onClick={() => pushLink('/daftar')} className="my-4">
                    <PersonAddTwoTone className="mb-1 mr-2" /> Daftar
				</div>
                <div onClick={() => pushLink('/masuk')} className="my-4">
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

export default Auth;