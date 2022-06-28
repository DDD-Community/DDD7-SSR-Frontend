import create from 'zustand';

type User = {
  imgSrc?: string | undefined;
  userName: string;
};

type UserStore = {
  user: User;
  login: ({ userName, imgSrc }: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    imgSrc: '',
    userName: 'Peter',
  },
  login: ({ userName, imgSrc }) => {
    if (imgSrc) {
      return set(() => ({ user: { imgSrc, userName } }));
    }
    return set(() => ({ user: { userName } }));
  },
  logout: () => set(() => ({ user: undefined })),
}));
