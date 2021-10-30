import React from 'react';
import './index.css';

import Header from '../../components/Header';
import Tela from '../../components/Tela';
import Footer from '../../components/Footer';

export default ()=>{

    return (
    <div className="pages">
        <Header spanProd="span"/>
        <Tela>
            <h2>Genuíno Software</h2>
            <p className="tela--description">
                O genuíno Software é um software voltado para a rede de Supermercados, 
                pois seu principal objetivo é guardar informações de produtos, cadastro de 
                clientes(juntamente com dívidas,pedidos ou créditos), gerência de funcuinários 
                entre outras funcionalidades. 
            </p>
            <h3>Como funciona o Software?</h3>
            <p className="tela--description">
                O sistema por trás do Genuíno Software funciona de maneira ágil e eficaz. 
                Logo no começo é apresentado uma tela onde o usuário/proprietário precisa 
                fazer o login com um email(Mais precisamente o email da empresa). Os arquivos 
                salvos ficarão linkados ao email cujo foi feito o login. Já dentro da interface 
                do software existem opções para fazer os cadastros dos produtos, funcuinários e 
                clientes, quando salvo, os arquivos ficarão em um Banco de Dados, que, como dito 
                acima, ficará linkado ao email em caso de logout. Caso o usuário/proprietário 
                queira fazer uma nova conta, os dados salvos na conta anterior não sofrerão 
                alterações e continuarão no primeiro email cadatrado e um novo Banco de Dados 
                é disponibilizado para o segundo email cadastrado.
            </p>
            <h3>Opções de Gerenciamento</h3>
            <p className="tela--description">
                A partir do login o software mostra várias opções de gerênciamento em forma de 
                menu, que contém todas as opções de gerênciamento. Ao clicar no menu são expostas 
                usuário as opções de gerênciamento, como, cadastrar produtos, pesquisar produtos, 
                cadastrar clientes, pesquisar clientes, castrar funcionários, pesquisar 
                funcionários(Todos os campos com a opção de deletar, alterar e salvar), agenda para 
                marcar datas importântes, um bloco de notas e uma opção de gerênciar a própria conta, 
                com opções de mudar nome de usuário, senha, opção de segurança e a opção de deletar a 
                conta.
            </p>
            <h3>Empresas que utilizam nossos serviços</h3>
            
            <div className="tela--link--images">
                <a href="https://www.carrefour.com.br/"><img src="https://matheusnunes133.github.io/ProjetoFinalGerencia/Imagens/Carrefour-Logo.png" alt="Carrefour" /></a>
                <a href="https://www.gpabr.com/en/"><img src="https://matheusnunes133.github.io/ProjetoFinalGerencia/Imagens/GPA-logo.png" alt="Grupo Pão de Açucar" /></a>
                <a href="https://www.big.com.br/"><img src="https://matheusnunes133.github.io/ProjetoFinalGerencia/Imagens/Logo_Grupo_Big.png" alt="Grupo Big" /></a>
            </div>
        </Tela>
            <div className="software--image">
                <img src="https://matheusnunes133.github.io/ProjetoFinalGerencia/Imagens/logo.png" alt="Genuíno Software" />
            </div>
        <Footer />
    </div>
    )



}