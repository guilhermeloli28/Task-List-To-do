import React, {Fragment} from 'react'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table,
    Button
} from 'reactstrap'
import { faTimes, faCheck, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {
    toast,
    Bounce
} from 'react-toastify';

const ListarTasks = (props) => {

    const notificar = (mensagem) => this.toastId = toast(mensagem, {
        transition: Bounce,
        closeButton: true,
        autoClose: 4000,
        position: 'top-center',
        type: 'success'
    })

    const deleteTask = (key) => {
        axios.delete(`http://localhost:3001/tarefas/${key}`)
            .then(resp => {
                notificar('Tarefa deletada com sucesso')
                props.atualizar()
            })
    }

    const updateDone = (key) => {
        axios.put(`http://localhost:3001/tarefas/done/${key}`)
            .then(resp => {
                notificar('Tarefa finalizada.')
                props.atualizar()
            })
    }

    const updateDoneAsFalse = (key) => {
        axios.put(`http://localhost:3001/tarefas/doneAsFalse/${key}`)
            .then(resp => {
                props.atualizar()
            })
    }

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

                                    {props.dados.map((item, idx) => {
                                        return <tr key={item.id} className="tablesReclamar" >
                                                    <td className={item.done ? "markedAsDone" : ''}>{item.tarefa}</td>
                                                    <td className={item.done ? "markedAsDone" : ''}>{item.descricao}</td>
                                                    <td className={item.done ? "markedAsDone" : ''}>{item.data}</td>
                                                    <td><Button color="" className="deletarTask-botao" onClick={() => deleteTask(item.id)}> <FontAwesomeIcon color="red" className="fa-2x" icon={faTimes}/> </Button></td>
                                                    <td><Button color="" className="deletarTask-botao" onClick={() => updateDone(item.id)}> <FontAwesomeIcon color="green" className="fa-2x" icon={faCheck}/> </Button></td>
                                                    <td><Button color="" className="deletarTask-botao" onClick={() => updateDoneAsFalse(item.id)}> <FontAwesomeIcon color="orange" className="fa-2x" icon={faArrowCircleRight}/> </Button></td>
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

export default ListarTasks