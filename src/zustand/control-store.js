import create from 'zustand';

const useControlStore = create((set, get) => ({
    keys: {
        forward: false,
        backward: false,
        left: false,
        right: false,
        brake: false,
        reset: false,
        enter: false
    },
    setKeys: (direction, value) => set((state) => (state.keys[direction] = value)),

}));

export default useControlStore;
