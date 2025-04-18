const localStorageManager = {
    saveUser: (user) => localStorage.setItem("user", JSON.stringify(user)),
    getUser: () => JSON.parse(localStorage.getItem("user")),
    clearUser: () => localStorage.removeItem("user"),
  };
  export default localStorageManager;