import React, { createContext } from 'react'
import { ReceitasProps } from '../@types/receitas'

export const ContextoReceita = createContext<ReceitasProps[]>([])