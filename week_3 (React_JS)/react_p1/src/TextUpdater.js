import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Type something..."
        className="border p-2 w-full rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;