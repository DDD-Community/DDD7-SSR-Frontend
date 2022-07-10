import create from 'zustand';

type User = {
  accountIdx: number;
  profileImg?: string | undefined;
  name: string;
};

type UserStore = {
  user: User | undefined;
  login: ({ name, profileImg }: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  login: ({ accountIdx, name, profileImg }) => {
    if (profileImg) {
      return set(() => ({ user: { accountIdx, profileImg, name } }));
    }
    return set(() => ({ user: { accountIdx, name } }));
  },
  logout: () => set(() => ({ user: undefined })),
}));
