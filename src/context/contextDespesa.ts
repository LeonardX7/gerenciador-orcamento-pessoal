import React, { createContext } from 'react'
import { DespesasProps } from '../@types/despesas'

export const ContextoDespesa = createContext<DespesasProps[]>([])
