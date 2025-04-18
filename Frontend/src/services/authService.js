const authService = {
    login: async (email, password) => {
      // Replace with actual API call
      return { id: 1, name: "John Doe", email, token: "sampleToken123" };
    },
    register: async (name, email, password) => {
      return { id: 1, name, email, token: "sampleToken123" };
    },
    logout: () => localStorage.removeItem("user"),
  };
  export default authService;