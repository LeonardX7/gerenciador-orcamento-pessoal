import React, { useEffect, useState } from "react";
import { ReceitasProps } from "../../@types/receitas";
import "./styles.css";

type CriarReceitaProps = {
  criarReceita: (receita: ReceitasProps) => void;
};

const CriarReceita = ({ criarReceita }: CriarReceitaProps) => {
  const [getReceita, setReceita] = useState<ReceitasProps>({ id: 0, titulo: "", valor: 0 });

  useEffect(() => {}, [getReceita]);

  return (
    <div className="criar-receita">
      <h1>Crie sua receita</h1>
      <input type="text" placeholder="Digite o nome da receita" onChange={(evento) => setReceita({ ...getReceita, titulo: evento.target.value })} />
      <input type="number" placeholder="Digite o valor da receita" onChange={(evento) => setReceita({ ...getReceita, valor: Number(evento.target.value) })} />
      <button onClick={() => criarReceita(getReceita)}>Criar receita</button>
    </div>
  );
};

export default CriarReceita;
