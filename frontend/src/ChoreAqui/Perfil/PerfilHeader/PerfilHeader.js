import React, {Fragment} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Row, Col, Card, CardBody} from 'reactstrap'
import BotaoReclamar from '../../../Core/BotaoReclamar/BotaoReclamar'

import avatar1 from '../../../assets/utils/images/avatars/logoUnesc.png'

class PerfilHeader extends React.Component {

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
                    
                    <Card className="main-card mb-12">
                        <CardBody>

                            <Row>
                                <Col md="4">
                                    
                                </Col>

                                <Col md="4">
                                    <div className="containerPerfilHeaderAvatar">
                                        <img width={180} className="rounded-circle" src={avatar1} alt=""/>
                                    </div>

                                    <div className="containerPerfilHeaderTitulo">
                                        <h5 className="card-title">Nome da Instituição de ensino cadastrada em nossa base de dados</h5>
                                    </div>

                                    <div className="containerPerfilHeaderSubTitulo">
                                        <span>Detalhes da instituição</span>
                                    </div>
                                </Col>

                                <Col md="4" >

                                    <BotaoReclamar/>
                                    
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>

                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default PerfilHeader