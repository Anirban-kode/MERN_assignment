import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;