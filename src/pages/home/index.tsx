import { useContext, useEffect } from "react";
import { ContextoTema } from "../../context/contextTema";
import './styles.css';

function Home () {
    const tema = useContext(ContextoTema)
    useEffect(() => {
        console.log('tema home: ', tema)
    }, [tema])
    
    return (
        <div className="home-page">
            <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>

            <div>
                <h2>O que é um Gerenciador de Orçamento Pessoal?</h2>
                <p>Um Gerenciador de Orçamento Pessoal é uma ferramenta essencial para organizar e gerenciar suas finanças pessoais. Ele permite que você mantenha um registro claro e estruturado das suas receitas e despesas, ajudando a aumentar seu controle financeiro.</p>
            </div>

            <div>
                <h2>Como Funciona?</h2>
                <p>Com um Gerenciador de Orçamento Pessoal, você pode:</p>
                <ul>
                    <li>Adicionar receitas com descrições claras e objetivas;</li>
                    <li>Adicionar despesas conforme sua importância ou urgência;</li>
                    <li>Visualizar o saldo bruto resultante das suas receitas e despesas;</li>
                </ul>
                <p>Com isso, você garante que nenhuma transação importante seja esquecida, mantendo suas finanças mais produtivas e organizadas.</p>
            </div>
        </div>
    )
}

export default Home;