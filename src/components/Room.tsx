import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

interface RoomProps {
  title: string;
  speakers: string[];
  listeners: number;
}

export default function Room({ title, speakers, listeners }: RoomProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center space-x-2 mb-3">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex items-center">
            <UserIcon className="h-5 w-5 text-gray-600" />
            <span className="ml-1 text-sm text-gray-700">{speaker}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <UserIcon className="h-4 w-4 mr-1" />
        <span>{listeners} listening</span>
      </div>
    </div>
  );
}