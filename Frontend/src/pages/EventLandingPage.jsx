import React from "react";
import { useNavigate } from "react-router-dom";

// Image imports (replace with actual paths or imports from /public)
import birthdayImg from "../assets/images/Events/birthday-theme.png";
import collegeImg from "../assets/images/Events/college-event.png";
import customImg from "../assets/images/Events/custom-event.png";
import partyImg from "../assets/images/Events/party-theme.png";

const eventOptions = [
  { name: "Birthday", image: birthdayImg },
  { name: "College Event", image: collegeImg },
  { name: "Custom Event", image: customImg },
  { name: "Party Theme", image: partyImg },
];

const EventLandingPage = () => {
  const navigate = useNavigate();

  const handleBook = (eventType) => {
    navigate(`/event-booking/${encodeURIComponent(eventType)}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Choose an Event</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventOptions.map(({ name, image }) => (
          <div
            key={name}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
            onClick={() => handleBook(name)}
          >
            <img
              src={image}
              alt={name}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLandingPage;
