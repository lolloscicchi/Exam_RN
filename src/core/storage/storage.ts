import { MMKV } from 'react-native-mmkv';

// QUESTO FILE SERVE PER SETTARE LA LIBRERIA USATA PER LO STORAGE IN UN FILE E
// NON IN OGNI SINGOLA SCHERMATA, COSÌ SE UN DOMANI SERVISSE MODIFICARE LA LIBRERIA,
// BASTA MODIFICARE SOLO QUESTO FILE

const MMKV_STORAGE = 'MMKV_STORAGE';
const mmkv = new MMKV({
  id: MMKV_STORAGE,
});

export const storage = {
  setItem: (key: string, value: string): void => {
    return mmkv.set(key, value);
  },

  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return value ?? null;
  },
  removeItem: (key: string) => {
    return mmkv.delete(key);
  },
};
