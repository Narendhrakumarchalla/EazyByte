import React from "react"
import AuthContent from "../contexts/AuthContent";

const RegisterPage = () => (
  <AuthContent title="Register">
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" className="border p-2 rounded" />
      <input type="email" placeholder="Email" className="border p-2 rounded" />
      <input type="password" placeholder="Password" className="border p-2 rounded" />
      <button className="bg-primary text-white py-2 rounded">Register</button>
    </form>
  </AuthContent>
);
export default RegisterPage;