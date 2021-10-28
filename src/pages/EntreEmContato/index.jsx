import React from 'react';
import './index.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default ()=>{
    return (
        <div className="pages">
            <Header spanContato="span"/>
            <section className="forms">
                <h3>Preencha o Formulário</h3>
                <form action="#" method="POST">
                        <div className="forms--item">
                            <label>Nome:</label>
                            <input name="nome" placeholder=" Digite seu Nome..." type="text" required="required" />
                        </div>
                        <div className="forms--item">
                            <label>Email:</label>
                            <input name="email" placeholder=" Digite seu Email..." type="email" required="required"/>
                        </div>
                        <div className="forms--item">
                            <label>Selecione sua Cidade:</label><br />
                            <select name="Cidade" required="required">
                                <option defaultValue="Selected">Selecione</option>
                                <option value="São José de Piranhas-PB">São José de Piranhas-PB</option>
                                <option value="Cajazeiras-PB">Cajazeiras-PB</option>
                                <option value="Sousa-PB">Sousa-PB</option>
                                <option value="Monte Horebe-PB">Monte Horebe-PB</option>
                                <option value="Bonito de Santa Fé-PB">Bonito de Santa Fé-PB</option>
                                <option value="Ipaumirim-CE">Ipaumirim-CE</option>
                                <option value="Cachoeira dos Índios-PB">Cachoeira dos Índios-PB</option>
                                <option value="João Pessoa-PB">João Pessoa-PB</option>
                            </select>
                        </div>
                        <div className="forms--item">
                            <label>Mande uma Mensagem:</label><br/>
                            <textarea name="Mensagem" required="required" placeholder=" Escreva uma mensagem..." maxLength="1000"></textarea>
                        </div>
                        <div className="forms--button">
                            <input type="submit" value="ENVIAR" />
                        </div>
                    </form>
            </section>
            <Footer />
        </div>
    );



}