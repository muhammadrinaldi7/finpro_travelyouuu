// src/store/userStore.ts
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  phoneNumber: string;
  profilePictureUrl: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  clearAuth: () => void; // Gabungkan clearToken dan clearUser
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  clearAuth: () => set({ user: null, token: null }), // Menghapus user dan token
}));
