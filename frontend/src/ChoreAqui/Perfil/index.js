import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'


import AppHeader from '../../Layout/AppHeader/'
import AppSidebar from '../../Layout/AppSidebar/'
import AppFooter from '../../Layout/AppFooter/'

import PerfilMain from './PerfilMain/PerfilMain'

const Perfil = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>

            <div className="app-main__outer">
                <div className="app-main__inner">
                     <PerfilMain/>
                </div>
            </div>

        </div>
    </Fragment>
);

export default Perfil