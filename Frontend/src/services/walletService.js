const walletService = {
    getBalance: async () => {
      return 500;
    },
    addFunds: async (amount) => {
      console.log(`Adding ₹${amount} to wallet.`);
      return { success: true };
    },
  };
  export default walletService;
      