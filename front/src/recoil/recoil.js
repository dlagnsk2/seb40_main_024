import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const darkMode = atom({
  key: 'darkMode',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
