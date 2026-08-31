import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ContadorState {
  name: string,
  password: string,
  isLoginValue: boolean,
  logout: () => void
  changeText: (newName: string, newPassword: string) => void
}

export const useFormStore = create<ContadorState>()(
  persist(
    (set) => ({
      name: '',
      password: '',
      isLoginValue: false,
      changeText: (newName: string, newPassword: string) =>
        set(() => ({
          name: newName.trim() === '' ? 'invalid' : newName,
          password: newPassword.trim() === '' ? 'invalid' : newPassword,
          isLoginValue: true,
        })),
      logout: () =>
        set({
          name: '',
          password: '',
          isLoginValue: false,
        }),
    }),
    {
      name: 'loginStore',
    }
  )
)
