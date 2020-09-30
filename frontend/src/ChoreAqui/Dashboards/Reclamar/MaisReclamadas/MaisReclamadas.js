import React, {Fragment} from 'react'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table
} from 'reactstrap'

class MaisReclamadas extends React.Component {

    render(){

        return (
            <Fragment>
                <Card className="main-card mb-2">
                    <CardBody>
                        <CardTitle>instituições + Reclamadas</CardTitle>
                        
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Nome</th>
                                    <th>Qtd Reclamações</th>
                                    <th>Qtd Respondidas</th>
                                </tr>
                            </thead>

                            <tbody>

                                {this.props.dados.map((item, idx) => {
                                    return <tr key={item.Id} className="tablesReclamar" onClick={() => {this.props.onClickMaisReclamadas(item)}}>
                                                <th scope="row">{item.Id}</th>
                                                <td><img width={40} className="rounded-circle" src={item.Logo} alt=""/></td>
                                                <td>{item.Nome}</td>
                                                <td>{item.QtdeReclamacoes}</td>
                                                <td>{item.QtdeRespondidas}</td>
                                            </tr>
                                })}

                            </tbody>
                        </Table>

                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}

export default MaisReclamadas