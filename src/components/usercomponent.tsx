import React from 'react';
import { Palette, Coffee, Music, Camera } from 'lucide-react';

interface UserCardProps {
  name: string;
  age: number;
  location: string;
  education?: string;
  occupation: string;
  quote: string;
  goals: string[];
  frustrations: string[];
  icon: React.ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  age,
  location,
  education,
  occupation,
  quote,
  goals,
  frustrations,
  icon
}) => (
  <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
        <div className="text-blue-400 w-16 h-16">
          {icon}
        </div>
      </div>
      <div className="md:col-span-2 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-light">{name}</h3>
            <p className="text-gray-400">Age {age} • {location}</p>
            {education && <p className="text-gray-400">Education: {education}</p>}
            <p className="text-gray-400">Occupation: {occupation}</p>
          </div>
          <div className="text-gray-400">
            <p>"{quote}"</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl text-blue-400 mb-2">Goals</h4>
            <ul className="text-gray-400 space-y-2">
              {goals.map((goal, index) => (
                <li key={index}>• {goal}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-red-400 mb-2">Frustrations</h4>
            <ul className="text-gray-400 space-y-2">
              {frustrations.map((frustration, index) => (
                <li key={index}>• {frustration}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function UserProfiles() {
  const users = [
    {
      name: "Sammy Sosa",
      age: 30,
      location: "Kansas City",
      occupation: "Aspiring Artist",
      quote: "If you don't try you can't succeed",
      goals: [
        "Be able to know what to target audience to create marketing which appeals to them",
        "Know how to reach them"
      ],
      frustrations: [
        "Doesn't know where to start",
        "Doesn't know how they would find their target audience"
      ],
      icon: <Palette className="w-full h-full" />
    },
    {
      name: "Elma Belle",
      age: 19,
      location: "Kansas City South",
      education: "Art School",
      occupation: "Artist",
      quote: "Change your place, change your luck",
      goals: [
        "Work less",
        "Stress less"
      ],
      frustrations: [
        "Sales aren't good",
        "Sometimes she can't work and can't travel as much",
        "Doesn't know technology"
      ],
      icon: <Coffee className="w-full h-full" />
    },
    {
      name: "Michael Monster",
      age: 35,
      location: "Lawrence, Kansas",
      education: "BA",
      occupation: "Artist",
      quote: "Is it a passion? Then do it",
      goals: [
        "Be able to focus his work for a greater return",
        "Find time to rest during the day"
      ],
      frustrations: [
        "Spends too much time creating to have time for proper analysis, too complicated!"
      ],
      icon: <Music className="w-full h-full" />
    },
    {
      name: "Maggy Medwin",
      age: 44,
      location: "Overland Park",
      education: "Highschool",
      occupation: "Manager",
      quote: "It's about time",
      goals: [
        "Share her art",
        "Feel secure about it"
      ],
      frustrations: [
        "Not familiar with technology in general",
        "Wants to be able to get her art out and into the world"
      ],
      icon: <Camera className="w-full h-full" />
    }
  ];

  return (
    <div className="space-y-8">
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}