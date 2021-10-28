import React from "react";
import './index.css';

import Header from "../../components/Header";
import Tela from "../../components/Tela";
import Footer from '../../components/Footer';


export default ()=>{


    return(
        <div className="pages">
            <Header spanInicial="span" />
            <Tela>
                <h2>Sobre a Empresa</h2>
                <p className="tela--description">A Genuíno Software é uma empresa que foi criada a mais de 5 anos e nela nós desenvolvemos 
                programas que tem a finalidade de gerenciar redes de supermercados com mais facilidade, ao longo 
                desses 5 anos foram criados dois Softwares que são o cargo chefe de nossa empresa que são o Genuíno 
                Software e o autêntico Software, nesse site temos uma pagina especifica explicando cada um dos dois programas, 
                confiram nosso site e olhem se nossos serviços atende a suas necessidades.</p>
            </Tela>
            <Footer />
        </div>
    )
}