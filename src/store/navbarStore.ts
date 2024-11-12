// src/store/navbarStore.ts
import { create } from "zustand";

interface NavbarState {
  open: boolean;
  modalLogin: boolean;
  modalLogout: boolean;
  toggleModalLogin: () => void;
  toggleModalLogout: () => void;
  toggleOpen: () => void;

}

export const useNavbarStore = create<NavbarState>((set) => ({
  open: false,
  modalLogin: false,
  modalLogout: false,
  toggleModalLogout: () => set((state) => ({ modalLogout: !state.modalLogout })),
  toggleModalLogin: () => set((state) => ({ modalLogin: !state.modalLogin })),
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
