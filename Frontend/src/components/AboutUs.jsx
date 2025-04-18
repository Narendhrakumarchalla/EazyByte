import React from "react";
import PaymentImg from "../assets/images/about/payment.png";
import ForecastImg from "../assets/images/about/forecast.png";
import EventImg from "../assets/images/about/event.png";

const AboutUs = () => {
  const cardData = [
    {
      img: PaymentImg,
      title: "Smart Payments",
      desc: "Say goodbye to long queues — scan a QR, pay in seconds, and enjoy your meal hassle-free.",
    },
    {
      img: ForecastImg,
      title: "AI Forecasting",
      desc: "We predict food demand using AI, helping reduce waste and ensuring efficient service every day.",
    },
    {
      img: EventImg,
      title: "Custom Event Booking",
      desc: "Plan birthdays, fests, and celebrations with customizable add-ons like cakes, decor, and more.",
    },
  ];

  return (
    <section className="bg-orange-100 py-16 px-6 md:px-20 text-center" id="about">
      <h2 className="text-4xl font-bold text-orange-600 mb-6">About Eazy-Bite</h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        Eazy-Bite is a smart canteen management system designed to transform traditional college canteens into modern, tech-driven food hubs.
        With features like QR-based payments, AI-powered demand prediction, real-time stock tracking, and customizable event bookings,
        we make the food experience faster, smarter, and more convenient for both students and canteen staff.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {cardData.map(({ img, title, desc }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            style={{ height: "380px" }}
          >
            <div className="h-1/2 w-full">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 px-6 py-4 text-center flex flex-col justify-center">
              <h3 className="text-xl font-bold text-orange-500 mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button className="bg-orange-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-orange-600 transition duration-200">
          Get Started with Eazy-Bite
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
