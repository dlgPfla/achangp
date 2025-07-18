import { create } from 'zustand';

interface UserState {
  name: string;
  profileImage: string;
  setUser: (name: string, profileImage: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: '',
  profileImage: '/default-profile.png',
  setUser: (name, profileImage) => set({ name, profileImage }),
}));