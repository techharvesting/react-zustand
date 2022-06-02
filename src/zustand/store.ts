import create from 'zustand';

type State = {
  count: number;
  incrementCount: () => void;
};

export const useStore = create<State>((set) => ({
  count: 5,
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
}));
