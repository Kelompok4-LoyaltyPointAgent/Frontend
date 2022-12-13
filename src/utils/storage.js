const storagePrefix = "hola";

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}_token`));
  },
  setToken: (token) => {
    window.localStorage.setItem(
      `${storagePrefix}_token`,
      JSON.stringify(token)
    );
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}_token`);
  },
};

export default storage;
