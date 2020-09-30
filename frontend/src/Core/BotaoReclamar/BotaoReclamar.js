import React, {Fragment} from 'react'
import {Button, Label} from 'reactstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'

const botaoReclamar = (props) => {

    return (
        <Fragment>
            
            <div className="containerPerfilHeaderBotaoReclamar">
                <Button className="btn-lg btn-danger" >
                    <FontAwesomeIcon className="ml-2 opacity-8 fa-lg" icon={faBullhorn}/> 
                    <Label className="containerPerfilHeaderBotaoReclamarLabel">Reclamar</Label>
                </Button>                                    
            </div>
        </Fragment>
    )
}

export default botaoReclamar