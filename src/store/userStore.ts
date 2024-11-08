// src/store/userStore.ts
import {create} from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  phoneNumber: string;
  profilePictureUrl: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
