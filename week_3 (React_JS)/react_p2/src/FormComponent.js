import { useState } from "react";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Enter text..."
        className="border p-2 w-full rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;