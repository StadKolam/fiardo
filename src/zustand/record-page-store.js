import create from 'zustand';

const useRecordPlayerStore = create((set) => ({
  zoom: false,
  playing: false,
  setPlaying: (status) => set(state => ({ playing: status })),
  setZoom: () => set(state => ({ zoom: !state.zoom })),
}));

export default useRecordPlayerStore;
