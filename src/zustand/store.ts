import create from 'zustand';
type State = {
  user: Object | undefined;
  lightPozX: number,
  lightPozY: number,
  int: number,
  mainLightInt: number,
  annotation: string | undefined;
  reqSignIn: () => void;
  noReqSignIn: () => void;
  setUser: (username: string) => void;
  setAnnotation: (annInput: string) => void;
};

type User = {
  attributes: Object
}

const useStore = create<State>((set) => ({
  user: undefined,
  movingLightInit: { int: 0, pos: [0, 0, 0] },
  mainLightInt: 0.7,
  lightPozX: 0,
  lightPozY: 0,
  int: 0,
  bears: 0,
  annotation: undefined,
  reqSignIn: () => set(() => ({ lightPozX: 7.5, lightPozY: 4, int: 0.6, mainLightInt: 0.2 })),
  noReqSignIn: () => set(() => ({ lightPozX: 0, lightPozY: 0, int: 0, mainLightInt: 0.7 })),
  setAnnotation: (annInput) => set(() => ({ annotation: annInput })),
  setUser: (username) => set(() => ({ user: username })),
}));

export default useStore;
