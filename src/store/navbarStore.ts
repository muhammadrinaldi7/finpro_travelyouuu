// src/store/navbarStore.ts
import { create } from "zustand";

interface NavbarState {
  open: boolean;
  modalLogin: boolean;
  toggleModalLogin: () => void;
  toggleOpen: () => void;

}

export const useNavbarStore = create<NavbarState>((set) => ({
  open: false,
  modalLogin: false,
  toggleModalLogin: () => set((state) => ({ modalLogin: !state.modalLogin })),
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
