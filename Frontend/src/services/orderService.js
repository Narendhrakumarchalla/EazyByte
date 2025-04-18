const orderService = {
    placeOrder: async (orderData) => {
      console.log("Placing order:", orderData);
      return { success: true };
    },
    getOrderHistory: async () => {
      return [
        { id: 1, item: "Pasta", price: 120, date: "2025-04-14" },
        { id: 2, item: "Burger", price: 90, date: "2025-04-12" },
      ];
    },
  };
  export default orderService;