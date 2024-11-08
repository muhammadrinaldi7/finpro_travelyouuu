// src/store/navbarStore.ts
import { create } from "zustand";

interface HomeState {
  open: boolean;
  toggleOpen: () => void;
}

export const useHomePageStore = create<HomeState>((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
