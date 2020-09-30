import React, {Fragment} from 'react'

import PerfilHeader from '../PerfilHeader/PerfilHeader'
import PerfilBody from '../PerfilBody/PerfilBody'
import {Row, Col} from 'reactstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class PerfilMain extends React.Component {

    render(){

        return (
            <Fragment>
                
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    
                    <Row>

                        <Col md="12">
                            <PerfilHeader/>
                        </Col>

                        <Col md="12" style={{paddingTop: "8px"}}>
                            <PerfilBody/>
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>

            </Fragment>
        )
    }
}

export default PerfilMain