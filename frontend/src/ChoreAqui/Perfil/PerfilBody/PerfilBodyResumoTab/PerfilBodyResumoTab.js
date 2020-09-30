import React, {Fragment} from 'react'
import Rating from '@material-ui/lab/Rating'
import {Row, Col, Label} from 'reactstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import avatar1 from '../../../../assets/utils/images/avatars/happy.jpg'

class PerfilBodyResumoTab extends React.Component {

	constructor(props){
		super(props)		

		this.state = {
			qtdeEstrelasSatisfacaoGeral: 4,
			qtdeEstrelasQualidadeDoEnsino: 3,
			qtdeEstrelasEstruturaFisica: 2,
			qtdeEstrelasCoordenacoes: 2,
			qtdeEstrelasProfessores: 1,
			mediaEstrelas: 4.6
		}
	}

    render(){

        return (
			<Fragment>
				
				<Row>
					<Col md="1">
						<div className="containerPerfilBodyResumoTabAvatar">
							<img width={80} className="rounded-circle" src={avatar1} alt=""/>
						</div>

						<div className="containerPerfilBodyResumoTabTituloAvatar">
							<Label className="labelPerfilHeaderBotaoReclamarLabel">Ótimo</Label>
						</div>

						<div className="containerPerfilBodyResumoTabTituloAvatar">
							<Label className="labelPerfilBodyResumoTabSubTituloAvatar">4.6</Label>
							<FontAwesomeIcon className="ml-2 fa-lg labelPerfilBodyResumoTabSubTituloEstrelaAvatar" icon={faStar}/>
						</div>
					</Col>

					<Col md="11">
						
						<div>
							<Row>
								<Col md="3">
									<Label>Satisfação Geral</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={this.state.qtdeEstrelasSatisfacaoGeral}
									name="estrelasSatisfacaoGeral"
									readOnly
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Qualidade do Ensino</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={this.state.qtdeEstrelasQualidadeDoEnsino}
									name="estrelasQualidadeDoEnsino"
									readOnly
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Estrutura Física</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={this.state.qtdeEstrelasEstruturaFisica}
									name="estrelasEstruturaFisica"
									readOnly
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Coordenações</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={this.state.qtdeEstrelasCoordenacoes}
									name="estrelasCoordenacoes"
									readOnly								
									/>
								</Col>
							</Row>
						</div>

						<div>
							<Row>
								<Col md="3">
									<Label >Professores</Label>
								</Col>
							</Row>

							<Row>
								<Col md="3">
									<Rating value={this.state.qtdeEstrelasProfessores}
									name="estrelasProfessores"
									readOnly									
									/>
								</Col>
							</Row>
						</div>

					</Col>
				</Row>
			</Fragment>
        )        
    }
}

export default PerfilBodyResumoTab