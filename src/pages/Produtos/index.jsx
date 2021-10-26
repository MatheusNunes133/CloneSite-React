import React from 'react';
import './index.css';

import Header from "../../components/Header";
import Tela from "../../components/Tela";
import Footer from '../../components/Footer';

export default ()=>{


    return(
        <div className="pages">
            <Header spanProd="span" />
            <Tela>
                <p className="produtos--title">Desenvolvimento de Software<br />
                    de mais alta <strong>Qualidade!</strong>
                </p>
                <p className="produtos--text">
                    Veja nossos produtos!
                </p>
                <div className="produtos--buttons">
                    <a href="#">Genuíno Software</a>
                    <a href="#">Autêntico Software</a>
                </div>
            </Tela>
            <Footer />
        </div>
    )
}