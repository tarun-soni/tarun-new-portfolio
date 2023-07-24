import { StoreInitialState } from '@/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { createStore } from 'zustand'

const store = createStore() // vanilla store without hooks

const useBearStore = create<StoreInitialState>()(
  devtools(
    persist(
      set => ({
        selectedRoute: '/about',
        setSelectedRoute: route => set({ selectedRoute: route }),
      }),
      {
        name: 'app-store',
      },
    ),
  ),
)

export default useBearStore
export { store }
