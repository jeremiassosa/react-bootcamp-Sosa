import { create } from 'zustand'

interface ContadorState {
    text: string
    changeText: (nuevoText: string) => void 
}

export const useFormStore = create<ContadorState>((set) => ({
    text: '',
    changeText: (nuevoText) => set(() => ({
        text: nuevoText.trim() === '' ? 'desconocido' : nuevoText 
    }))
}))
