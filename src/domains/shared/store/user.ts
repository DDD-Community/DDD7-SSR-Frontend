import create from 'zustand';
import { User } from '../model/shared';

type UserStore = {
  user: User | undefined;
  login: ({ name, profileImg }: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  login: (userData) => {
    return set(() => ({ user: userData }));
  },
  logout: () => set(() => ({ user: undefined })),
}));
