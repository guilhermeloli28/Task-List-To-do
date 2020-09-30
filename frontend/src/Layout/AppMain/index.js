import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import React, {Suspense, lazy, Fragment} from 'react'

import {
    ToastContainer,
} from 'react-toastify'

const Dashboards = lazy(() => import('../../ChoreAqui/Dashboards'))
const Login = lazy(() => import('../../ChoreAqui/Login'))
const Perfil = lazy(() => import('../../ChoreAqui/Perfil'))

import AddTarefa from '../../ChoreAqui/Dashboards/Reclamar/AdicionarTarefa/index'

const AppMain = () => {

    return (
        <Fragment>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
            <Route path="/cadastro" component={AddTarefa}/>
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
            <Route path="/perfil" component={Perfil}/>
            </Suspense>
            
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
            <Route path="/login" component={Login}/>
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboard" component={Dashboards}/>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/dashboard"/>
            )}/>
            
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain