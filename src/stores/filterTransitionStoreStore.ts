import { create } from "zustand"

interface FilterTransitionStore {
    selected: string
    set: (filter: string) => void
}

export const useFilterTransitionStore = create<FilterTransitionStore>(
  (set: (arg0: () => { selected: string }) => any) => ({
    selected: "",
    set: (filter: string) => set(() => ({ selected: filter })),
  }),
);
