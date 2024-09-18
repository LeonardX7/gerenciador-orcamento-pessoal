import React, { useEffect, useState } from "react";
import { DespesasProps } from "../../@types/despesas";
import "./styles.css";
type CriarDespesaProps = {
  criarDespesa: (despesa: DespesasProps) => void;
};

const CriarDespesa = ({ criarDespesa }: CriarDespesaProps) => {
  const [getDespesa, setDespesa] = useState<DespesasProps>({ id: 0, titulo: "", valor: 0 });

  useEffect(() => {}, [getDespesa]);

  return (
    <div className="criar-despesa">
      <h1>Crie sua despesa</h1>
      <input type="text" placeholder="Digite o nome da despesa" onChange={(evento) => setDespesa({ ...getDespesa, titulo: evento.target.value })} />
      <input type="number" placeholder="Digite o valor da despesa" onChange={(evento) => setDespesa({ ...getDespesa, valor: Number(evento.target.value) })} />
      <button onClick={() => criarDespesa(getDespesa)}>Criar despesa</button>
    </div>
  );
};

export default CriarDespesa;
