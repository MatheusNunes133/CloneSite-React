import React from 'react';
import './index.css';


export default (props)=>{

    return(
        <header className='header'>
            <div className='header--info'>
                <img src="https://matheusnunes133.github.io/ProjetoFinalGerencia/Imagens/logo.png" alt="Logo" className="header--logo"/>
                <nav className="header--menu">
                    <ul>
                        <li>
                            <a href="/CloneSite-React" className={props.spanInicial}>Página Inicial</a>
                        </li>
                        <li>
                            <a href="/CloneSite-React/produtos" className={props.spanProd}>Produtos</a>
                        </li>
                        <li>
                            <a href="/CloneSite-React/entre-em-contato" className={props.spanContato}>Entre em contato</a>
                        </li>
                        <li> 
                            <a href="/CloneSite-React/desenvolvedores" className={props.spanDevs}>Desenvolvedores</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>

        </header>

    );
}