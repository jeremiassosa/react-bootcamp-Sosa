import { createContext, useContext, useState, type ReactNode } from 'react'

interface ContadorContextType {
  contador: number
  incrementar: () => void
  decrementar: () => void
}

export const ContadorContext = createContext<ContadorContextType | undefined>(undefined)

export function ContadorProvider({ children }: { children: ReactNode }) {
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador((count) => count + 1)
    const decrementar  = () => setContador((count) => count - 1)

  return (
    <ContadorContext.Provider value={{ contador, incrementar, decrementar}}>
        {children}
    </ContadorContext.Provider>
  )
}

export function useContador() {
  const contexto = useContext(ContadorContext)
  if (!contexto) {
    throw new Error('useContador debe usarse dentro de un ContadorContext.Provider')
  }
  return contexto
}