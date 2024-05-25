import { create } from "zustand";

interface UserStore {
  user: any | null;
  setUser: (payload: any | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (payload: any) => set(() => ({ user: payload })),
}));
