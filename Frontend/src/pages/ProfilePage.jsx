import React from 'react';
const ProfilePage = () => (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Role:</strong> Student</p>
      </div>
    </div>
  );
  export default ProfilePage;