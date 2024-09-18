import { useContext, useEffect } from "react";
import { ContextoTema } from "../../context/contextTema";
import './styles.css';

function Sobre() {
    const tema = useContext(ContextoTema)
    useEffect(() => {
        console.log('tema sobre: ', tema)
    }, [tema])
    
    return (
        <div className="sobre-page">
            <h1>Sobre o Criador da Página</h1>
            <div>
                <div>
                    <img src="/eu.jpg" style={{ width: '150px', height: '150px' }} />
                </div>
                <div>
                    <h2>Nome: Leonardo de Meira Oliveira</h2>
                    <h3>Profissão: Analista de Qualidade</h3>
                    <p>Sou o Leonardo, nasci e cresci em Cascavel, desde que eu era criança sempre fui apaixonado por tecnologia, porém no meu ensino médio o máximo que eu fiz foi algumas coisas em js, e trabalhei de estágiario em outras áreas. Porém aos meus 18 anos ingressei no curso de Engenharia de Software, curso que estou no penultimo ano, e também no mesmo ano comecei a trabalhar como desenvolvedor na empresa Aliare, aonde eu trabalho até hoje porém hoje como Analista de Qualidade.</p>
                    <p><a href="https://github.com/LeonardX7" target="https://github.com/LeonardX7">Visitar GitHub</a></p>
                </div>
            </div>
        </div>
    )
}

export default Sobre;