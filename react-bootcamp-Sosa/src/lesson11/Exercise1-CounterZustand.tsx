import { create } from 'zustand'

interface ContadorState {
    count: number
    incrementar: () => void
    decrementar: () => void
}

export const useContadorStore = create<ContadorState>((set) => ({
    count: 0,
    incrementar: () => set((state) => ({ count: state.count + 1 })),
    decrementar: () => set((state) => ({ count: state.count - 1 })),
}))