import React, {Fragment} from 'react'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table,
    Button
} from 'reactstrap'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {
    toast,
    Bounce
} from 'react-toastify';

class ListarTarefas extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.notificar = this.notificar.bind(this);
    }

    notificar = (mensagem) => this.toastId = toast(mensagem, {
        transition: Bounce,
        closeButton: true,
        autoClose: 4000,
        position: 'top-center',
        type: 'success'
    })

    deleteTask = (key) =>{
        debugger;
        axios.delete(`http://localhost:3001/tarefas/${key}`)
            .then(resp => {
                this.notificar('Tarefa deletada com sucesso')
                this.props.atualizar()
            })
    }

    render(){

        return (
            <Fragment>
                <Card className="main-card mb-2">
                    <CardBody className="divTarefas">
                        <div className="tarefasDois">
                            {/* <CardTitle>Tarefas</CardTitle> */}
                            <Table className="mb-5">
                                <thead>
                                    <tr>
                                        <th>Tarefa</th>
                                        <th>Descrição</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {/* onClick={() => {this.props.onClickMaisReclamadas(item)}} */}

                                    {this.props.dados.map((item, idx) => {
                                        return <tr key={item.id} className="tablesReclamar" >
                                                    <td>{item.tarefa}</td>
                                                    <td>{item.descricao}</td>
                                                    <td>{item.data}</td>
                                                    <td><Button color="" className="deletarTask-botao" onClick={() => this.deleteTask(item.id)}> <FontAwesomeIcon color="red" className="fa-2x" icon={faTimes}/> </Button></td>
                                                </tr>
                                    })}

                                </tbody>
                            </Table>
                        </div>

                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}

export default ListarTarefas