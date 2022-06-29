import create from 'zustand';

type User = {
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
  login: ({ name, profileImg }) => {
    if (profileImg) {
      return set(() => ({ user: { profileImg, name } }));
    }
    return set(() => ({ user: { name } }));
  },
  logout: () => set(() => ({ user: undefined })),
}));
