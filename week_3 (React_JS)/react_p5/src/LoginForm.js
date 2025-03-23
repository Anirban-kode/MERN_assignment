import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <label className="block mb-2 text-gray-700">Email:</label>
        <input
          type="email"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-gray-700">Password:</label>
        <input
          type="password"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;