import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageItem = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const setStorageItem = async (key: string, value: string) => {
  return await AsyncStorage.setItem(key, value);
};

export const removeStorageItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};

export const clearStorage = async () => {
  return await AsyncStorage.clear();
};

export const getStorageKeys = async () => {
  return await AsyncStorage.getAllKeys();
};

export const getStorageItems = async () => {
  const keys = await getStorageKeys();
  return await AsyncStorage.multiGet(keys);
};

export const setStorageItems = async (items: any) => {
  return await AsyncStorage.multiSet(items);
};

export const removeStorageItems = async (keys: any) => {
  return await AsyncStorage.multiRemove(keys);
};

export const getReduxPersist = async () => {
  return await AsyncStorage.getItem('persist:root');
};

export const getLocalTokens = async () => {
  const reduxStorage = await getReduxPersist();
  if (reduxStorage) {
    const reduxStorageParsed = JSON.parse(reduxStorage);
    const auth = reduxStorageParsed?.auth;
    const authParsed = JSON.parse(auth);
    if (authParsed?.isLoggedIn) {
      const accessToken = authParsed.user.access_token;
      const refreshToken = authParsed.user.refresh_token;
      return {accessToken, refreshToken};
    }
  }
};
