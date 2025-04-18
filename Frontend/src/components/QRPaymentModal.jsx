import React from "react";
const QRPaymentModal = ({ isOpen, onClose, qrImage, amount }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-80 text-center">
          <h2 className="text-lg font-semibold mb-2">Scan QR to Pay</h2>
          <img src={qrImage} alt="QR Code" className="w-48 h-48 mx-auto" />
          <p className="mt-2 font-medium">Amount: ₹{amount}</p>
          <button onClick={onClose} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    );
  };
  export default QRPaymentModal;