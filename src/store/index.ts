import { StoreInitialState } from '@/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { createStore } from 'zustand'

const store = createStore() // vanilla store without hooks

const useAppStore = create<StoreInitialState>()(
  devtools(
    persist(
      set => ({
        selectedRoute: '/about',
        
        setSelectedRoute: route => set({ selectedRoute: route }),
        isDarkMode:true,
        setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
      }),

      {
        name: 'app-store',
      },
    ),
  ),
)

export default useAppStore
export { store }
