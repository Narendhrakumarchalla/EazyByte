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
    alert(`🎉 Booked ${formData.eventType} event successfully!`);
  };

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Book Your <span className="capitalize">{formData.eventType}</span> Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Event Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Event Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300"
              placeholder="Enter number of expected guests"
            />
          </div>

          {/* Cake & Decoration */}
          <div className="flex flex-wrap gap-6">
            <label className="inline-flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                name="cakeRequired"
                checked={formData.cakeRequired}
                onChange={handleChange}
                className="form-checkbox mr-2 accent-blue-600"
              />
              Cake Required
            </label>
            <label className="inline-flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                name="decorationRequired"
                checked={formData.decorationRequired}
                onChange={handleChange}
                className="form-checkbox mr-2 accent-blue-600"
              />
              Decoration Required
            </label>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300"
              placeholder="Mention any specific requests or preferences"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 transition-colors text-white text-lg font-semibold py-3 rounded-md shadow-lg"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventBookingForm;
