const menuService = {
    fetchMenuItems: async () => {
      return [
        { id: 1, name: "Pasta", price: 120 },
        { id: 2, name: "Burger", price: 90 },
      ];
    },
  };
  export default menuService;