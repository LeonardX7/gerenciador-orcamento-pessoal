import React, { useEffect, useState } from 'react';
import { ReceitasProps } from '../../@types/receitas';
import { DespesasProps } from '../../@types/despesas';

type DashboardProps = {
  getReceitas: ReceitasProps[];
  getDespesas: DespesasProps[];
};

const Dashboard = ({ getReceitas, getDespesas }: DashboardProps) => {
  const [saldoBruto, setSaldoBruto] = useState<number>(0);

  useEffect(() => {
    const totalReceitas = getReceitas.reduce((acc, receita) => acc + receita.valor, 0);
    const totalDespesas = getDespesas.reduce((acc, despesa) => acc + despesa.valor, 0);
    setSaldoBruto(totalReceitas - totalDespesas);
  }, [getReceitas, getDespesas]);

  return (
    <div className="dashboard">
      <div className="lista-entradas">
        <h2>Lista de Receitas</h2>
        <ul>
          {getReceitas.map((receita: ReceitasProps) => (
            <li key={receita.id}>
              {receita.titulo}: R$ {receita.valor.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="lista-despesas">
        <h2>Lista de Despesas</h2>
        <ul>
          {getDespesas.map((despesa: DespesasProps) => (
            <li key={despesa.id}>
              {despesa.titulo}: R$ {despesa.valor.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="saldo-bruto">
        <h2>Saldo Bruto</h2>
        <p>R$ {saldoBruto.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Dashboard;
