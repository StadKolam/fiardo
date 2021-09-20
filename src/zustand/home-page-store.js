import create from 'zustand';

const useHomeStore = create((set, get) => ({
  videoPlaying: true,
  videoFileName: '/fiardo-welcome.mp4',
  link: undefined,
  user: undefined,
  lightPozX: 0,
  lightPozY: 0,
  int: 0,
  setLink: (linkUrl) => set((state) => (state.link = linkUrl)),
  setVideo: (fileName) => set((state) => (state.videoFileName = fileName)),
  setUser: (username) => set(() => ({ user: username })),
  reqSignIn: () => set(() => ({ lightPozX: 6, lightPozY: 6, int: 0.4 })),
  noReqSignIn: () => set(() => ({ lightPozX: 0, lightPozY: 0, int: 0 })),

}));

export default useHomeStore;
