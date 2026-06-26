export const setLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getLocalStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (item === null) return null;
    return JSON.parse(item) as T;
  };
  
  export const removeLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };
