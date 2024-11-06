import React from 'react';
import Room from '../components/Room';

const rooms = [
  {
    title: "Tech Talk: Future of AI",
    speakers: ["John Doe", "Jane Smith"],
    listeners: 234
  },
  {
    title: "Startup Stories",
    speakers: ["Alice Johnson", "Bob Wilson"],
    listeners: 156
  },
  {
    title: "Music & Art",
    speakers: ["Chris Brown", "Diana Ross"],
    listeners: 89
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Explore Rooms</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
          + Start a room
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <Room key={index} {...room} />
        ))}
      </div>
    </div>
  );
}