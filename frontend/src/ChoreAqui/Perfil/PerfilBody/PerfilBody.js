import React, {Fragment} from 'react'

import {Row, Col, Card, CardBody} from 'reactstrap'
import Tabs from 'react-responsive-tabs'

import PerfilBodyResumoTab from './PerfilBodyResumoTab/PerfilBodyResumoTab'
import PerfilBodyReclamacoesTab from './PerfilBodyReclamacoesTab/PerfilBodyReclamacoesTab'
import PerfilBodyAvaliacoesTab from './PerfilBodyAvaliacoesTab/PerfilBodyAvaliacoesTab'
import PerfilBodyPerfilTab from './PerfilBodyPerfilTab/PerfilBodyPerfilTab'

const tabsContent = [
    {
        title: 'Resumo',
        content: <PerfilBodyResumoTab/>
    },
    {
        title: 'Reclamações',
        content: <PerfilBodyReclamacoesTab/>
    },
    {
        title: 'Avaliações',
        content: <PerfilBodyAvaliacoesTab/>
    },
    {
        title: 'Perfil',
        content: <PerfilBodyPerfilTab/>
    }
]

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

class PerfilBody extends React.Component {

    render(){

        return (
            <Fragment>
                
                <Card className="main-card mb-12">
                    <CardBody>
                        <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
                    </CardBody>
                </Card>

            </Fragment>
        )
    }
}

export default PerfilBody