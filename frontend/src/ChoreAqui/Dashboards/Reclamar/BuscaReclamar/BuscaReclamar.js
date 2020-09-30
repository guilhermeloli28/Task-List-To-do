import React, {Fragment} from 'react'
import { Card, CardBody, Button, Input} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faPlug, faPlus} from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class BuscaReclamar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorTarefa: ""
        };

        this.buscarTasks = this.buscarTasks.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    buscarTasks() {
        console.log(this.state.valorTarefa);
    }

    handleChange = event => {
        this.setState({
            valorTarefa: event.target.value
        });
    }

    render(){

        return (
            <Fragment>
                <Card className="main-card mb-2 buscaReclamar-minHeight" >
                    <CardBody className="containerBuscaReclamarFlex">
                        
                        <div className="containerBuscaReclamar">
                            <div className="containerBuscaReclamarCentralizado">
                                <Input 
                                    type="text" 
                                    placeholder="Pesquisar por uma tarefa..."
                                    onChange={this.handleChange}
                                />
                                <Button color="secundary" className="buscaReclamar-botao" onClick={this.buscarTasks}> <FontAwesomeIcon className="fa-2x" icon={faSearch}/> </Button>
                                <Link className="btnAddTarefa" to={`/cadastro/adicionarTarefa`}><FontAwesomeIcon className="fa-2x" icon={faPlus} color="success"/></Link>
                            </div>
                        </div>
                        
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}

export default BuscaReclamar