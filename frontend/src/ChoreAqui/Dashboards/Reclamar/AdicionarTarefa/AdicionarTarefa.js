import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import axios from 'axios'
import {
    toast,
    Bounce
} from 'react-toastify';

class AdicionarTarefa extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            tarefa: "",
            descricao: "",
            data: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.notificar = this.notificar.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    notificar = (mensagem) => this.toastId = toast(mensagem, {
        transition: Bounce,
        closeButton: true,
        autoClose: 4000,
        position: 'top-center',
        type: 'success'
    })

    clearState() {
        this.setState({
            tarefa: "",
            descricao: "",
            data: ""
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:3001/tarefas', this.state)
            .then(response => {
                this.notificar('Tarefa cadastrada');
                this.clearState();
            })
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateForm() {
        return this.state.tarefa.length > 0 && this.state.descricao.length; 
    }

    render() {
        return(
            <Fragment>
                <div className="formAdicionarTarefa">
                    <form onSubmit={this.handleSubmit}>
                        <title>Oi</title>
                        <FormGroup controlId="tarefa" bsSize="large">
                            <ControlLabel>Tarefa</ControlLabel>
                            <FormControl
                                autoFocus
                                type="tarefa"
                                value={this.state.tarefa}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="descricao" bsSize="large">
                            <ControlLabel>Descrição</ControlLabel>
                            <FormControl
                                autoFocus
                                type="textarea"
                                value={this.state.descricao}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="data" bsSize="large">
                            <ControlLabel>Data finalização</ControlLabel>
                            <FormControl
                                placeholder="DD/MM/YYYY"
                                autoFocus
                                type="data"
                                value={this.state.data}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button
                                variant="success"
                                disabled={!this.validateForm()}
                                block
                                bsSize="large"
                                type="submit"
                                size="lg"
                            >
                                Adicionar
                        </Button>

                        <Link className="d-flex justify-content-center" to={`/dashboard`}>Voltar</Link>
                        
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default AdicionarTarefa