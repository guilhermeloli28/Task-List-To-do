import React, {Fragment} from 'react'
import {
    Col, Row, Card, CardBody,
    CardTitle, 
    Table
} from 'reactstrap'

class MelhoresInstituicoes extends React.Component {

    render(){

        return (
            <Fragment>
                <Card className="main-card mb-2">
                    <CardBody>
                        <CardTitle>Melhores Instituições</CardTitle>
                        
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Nome</th>
                                    <th>% Satisfação</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.dados.map((item, idx) => {
                                    return <tr key={item.Id} className="tablesReclamar" onClick={() => {this.props.onClickMelhores(item)}}>
                                                <th scope="row">{item.Ranking}</th>
                                                <td><img width={40} className="rounded-circle" src={item.Logo} alt=""/></td>
                                                <td>{item.Nome}</td>
                                                <td>{item.Percentual}</td>
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

export default MelhoresInstituicoes