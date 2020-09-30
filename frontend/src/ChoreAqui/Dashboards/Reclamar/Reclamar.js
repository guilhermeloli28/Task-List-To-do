import React, {Fragment} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table
} from 'reactstrap'
import BuscaTasks from './BuscaReclamar/BuscaReclamar'
import ListarTarefas from './Tarefas/ListarTarefas'
import AdicionarTarefa from './AdicionarTarefa/AdicionarTarefa'
import ListarTasks from './Tarefas/ListarTasks'

import avatar1 from '../../../assets/utils/images/avatars/logoSatc.png';
import avatar2 from '../../../assets/utils/images/avatars/logoUnesc.png';
import avatar3 from '../../../assets/utils/images/avatars/logoEsucri.png';

class Reclamar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: []
        };

        this.recuperar = this.recuperar.bind(this);
    }

    componentDidMount() {
        this.recuperar()
    }

    recuperar() {
        axios.get('http://localhost:3001/tarefas')
        .then((resp) => {
            const tasks = resp.data
            this.setState({tasks})
        })
        .catch((error) => console.log(error));
    }
    
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
                            <BuscaTasks/>
                        </Col>

                        <Col md="12">
                            {/* <MelhoresInstituicoes dados={melhores} onClickMelhores={(item) => this.clickMelhores(item)}/> */}
                            <ListarTasks dados={this.state.tasks} atualizar={this.recuperar}/>
                        </Col>

                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default withRouter(Reclamar)
