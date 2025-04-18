import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EventBookingForm = () => {
  const { eventType } = useParams();
  const [formData, setFormData] = useState({
    eventType: decodeURIComponent(eventType),
    date: "",
    time: "",
    guests: "",
    cakeRequired: false,
    decorationRequired: false,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert(`Booked ${formData.eventType} event successfully!`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Book {formData.eventType}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date & Time */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block font-medium">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Options */}
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="cakeRequired"
              checked={formData.cakeRequired}
              onChange={handleChange}
            />
            <span>Cake Required</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="decorationRequired"
              checked={formData.decorationRequired}
              onChange={handleChange}
            />
            <span>Decoration Required</span>
          </label>
        </div>

        {/* Notes */}
        <div>
          <label className="block font-medium">Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Any specific requests?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white p-2 rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default EventBookingForm;
