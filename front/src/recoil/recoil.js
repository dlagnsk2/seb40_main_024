import { atom } from 'recoil';

export const LightState = atom({
  key: 'light',
  default: {
    bgColor: '#f2f5f7',
  },
});

export const DarkState = atom({
  key: 'dark',
  default: {
    bgColor: '#020626',
  },
});

export const modeState = atom({
  key: 'isMode',
  default: {
    mode: 'LightState',
  },
});
