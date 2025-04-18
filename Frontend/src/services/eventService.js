const eventService = {
    bookEvent: async (formData) => {
      console.log("Booking event with:", formData);
      return { success: true };
    },
  };
  export default eventService;