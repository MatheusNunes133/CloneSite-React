import React from 'react';
import './index.css';

import Header from '../../components/Header'
import Tela from '../../components/Tela';
import Footer from '../../components/Footer'

export default ()=>{
    return (
        <div className="pages">
            <Header spanDevs="span" />
            <Tela>
                <h2>Desenvolvedores</h2>
                <h3 className="tela--devName">
                    <a href="#">Matheus Nunes Miguel</a>
                </h3>
                <p className="tela--description">
                Tenho 19 anos, sou formado em informática pela ECIT Nicéa Claudino em Cajazeiras-PB, 
                gosto muito da área de programação e tenho bastante interesse em aprender mais sobre, 
                estou cursando Análise e Desenvolvimento de Sistemas no IFPB de Cajazeiras.
                </p>
            </Tela>
            <Footer/>
        </div>
    );



}