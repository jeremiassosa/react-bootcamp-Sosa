import { create } from 'zustand';

interface ContadorState {
  counter: number;
  initialNumber: number;
  startCounter: (valor: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useContadorStore = create<ContadorState>((set) => ({
  counter: 0,
  initialNumber: 0,

  startCounter: (counter) => 
    set({ counter, initialNumber: counter}),
    
  increment: () => 
    set((state) => ({ counter: state.counter + 1 })),
    
  decrement: () => 
    set((state) => ({ counter: state.counter - 1 })),
    
  reset: () => 
    set((state) => ({ counter: state.initialNumber })),
}));
