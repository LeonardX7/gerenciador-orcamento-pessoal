import React, { useState } from 'react';
import Dashboard from '../../components/dashboard';
import CriarReceita from '../../components/criarReceita';
import CriarDespesa from '../../components/criarDespesa';
import { ReceitasProps } from '../../@types/receitas';
import { DespesasProps } from '../../@types/despesas';
import './styles.css';

enum DashboardPages {
  'listagem' = 'listagem',
  'criarReceita' = 'criarReceita',
  'criarDespesa' = 'criarDespesa'
}

let receitasPersistidas: ReceitasProps[] = [];
let despesasPersistidas: DespesasProps[] = [];

function DashboardPage() {
  const [getReceitas, setReceitas] = useState<ReceitasProps[]>(receitasPersistidas);
  const [getDespesas, setDespesas] = useState<DespesasProps[]>(despesasPersistidas);
  const [getPaginaAtual, setPaginaAtual] = useState<DashboardPages>(DashboardPages.listagem);

  const atualizarReceitas = (novasReceitas: ReceitasProps[]) => {
    receitasPersistidas = novasReceitas;
    setReceitas(novasReceitas);
  };

  const atualizarDespesas = (novasDespesas: DespesasProps[]) => {
    despesasPersistidas = novasDespesas;
    setDespesas(novasDespesas);
  };

  const renderizarPagina = () => {
    switch (getPaginaAtual) {
      case DashboardPages.listagem:
        return (
          <Dashboard
            getReceitas={getReceitas}
            getDespesas={getDespesas}
          />
        )
      case DashboardPages.criarReceita:
        return (
          <CriarReceita criarReceita={(novaReceita: ReceitasProps) => {
            const id: number = getReceitas.length + 1;
            novaReceita.id = id;
            const tmpReceitas: ReceitasProps[] = [...getReceitas, novaReceita];
            atualizarReceitas(tmpReceitas);
            setPaginaAtual(DashboardPages.listagem);
          }} />
        )
      case DashboardPages.criarDespesa:
        return (
          <CriarDespesa criarDespesa={(novaDespesa: DespesasProps) => {
            const id: number = getDespesas.length + 1;
            novaDespesa.id = id;
            const tmpDespesas: DespesasProps[] = [...getDespesas, novaDespesa];
            atualizarDespesas(tmpDespesas);
            setPaginaAtual(DashboardPages.listagem);
          }} />
        )
      default:
        return (
          <Dashboard
            getReceitas={getReceitas}
            getDespesas={getDespesas}
          />
        )
    }
  }

  const renderizarBotoes = () => (
    <div className="botoes-dashboard">
      <button onClick={() => setPaginaAtual(DashboardPages.listagem)}>Listagem</button>
      <button onClick={() => setPaginaAtual(DashboardPages.criarReceita)}>Criar Receita</button>
      <button onClick={() => setPaginaAtual(DashboardPages.criarDespesa)}>Criar Despesa</button>
    </div>
  )

  return (
    <div className="dashboard">
      {renderizarBotoes()}
      {renderizarPagina()}
    </div>
  );
}

export default DashboardPage;
