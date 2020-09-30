import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// LOGIN

import AdicionarTarefa from './AdicionarTarefa'

import AppHeader from '../../../../Layout/AppHeader'
import AppSidebar from '../../../../Layout/AppSidebar'

const Login = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>

            <div className="app-main__outer">
                <div className="app-main__inner">

                    <Route path={`${match.url}/adicionarTarefa`} component={AdicionarTarefa}/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Login;