import React from 'react';
import { Palette, Coffee, Music, Camera } from 'lucide-react';
import Image from 'next/image';

const UserCard = ({ name, age, location, education, occupation, quote, story, goals, frustrations, icon }) => (
  <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm mb-8 border-2 border-blue-400">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column with Icon */}
      <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 border-2 border-blue-400">
        <div className="text-blue-400 w-16 h-16">
          {icon}
        </div>
      </div>

      {/* Right Column with Content */}
      <div className="md:col-span-2 space-y-4">
        {/* Basic Info with Quote */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-light">{name}</h3>
            <p className="text-gray-400">Age {age} • {location}</p>
            {education && <p className="text-gray-400">Education: {education}</p>}
            <p className="text-gray-400">Occupation: {occupation}</p>
          </div>
          <p className="text-2xl text-white italic shrink-0">"{quote}"</p>
        </div>

        {/* Goals and Frustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-green-200 p-4 rounded-lg">
            <h4 className="text-xl text-blue-400 mb-2">Goals</h4>
            <ul className="text-gray-400 space-y-2">
              {goals.map((goal, index) => (
                <li key={index}>• {goal}</li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-red-200 p-4 rounded-lg">
            <h4 className="text-xl text-red-400 mb-2">Frustrations</h4>
            <ul className="text-gray-400 space-y-2">
              {frustrations.map((frustration, index) => (
                <li key={index}>• {frustration}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Story Box */}
        <div className="border-2 border-blue-400 p-4">
          <p className="text-gray-300">{story}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function UserPersonas() {
  const users = [
    {
      name: "Sammy Sosa",
      age: 30,
      location: "Kansas City",
      occupation: "Aspiring Artist",
      quote: "If you don't try you can't succeed",
      story: "Sammy Sosa is trying to expand his career by utilizing a long time passion. But he doesn't know how to turn it into a profitable business. Sammy has the passion and the skills, but he isn't skilled in how his age audience reacts and how to affect his decisions.",
      goals: [
        "Be able to know what target audience to create marketing which appeals to them",
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
      story: "Elma Belle is a recent graduate that has worked her way to a good position in her career through the old fashioned methods of word of mouth and taking part in gallery exhibitions. Elma is ready to move on to digital platforms but is having trouble using her skills to direct her art more efficiently.",
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
      story: "Michael Monster has been working tirelessly building his retail side and used base. He has to think to not during the entire day - not enough time to do proper sales analysis. But he ready to slow down a bit - just enough to get some rest during the day - but he doesn't know how to make more from less.",
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
      story: "Maggy is tired! She's been working for several decades in the same job. She is great at it! It's a good thing but she never knows how to share her skills - but finally she is ready to slow down a bit and realizing she needs to build up her side art work but she needs to find out how to share what she has created.",
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
    <div className="space-y-16">
      <h2 className="text-4xl font-light mb-8">Define</h2>
      
      {/* User Personas Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-light mb-6">User Personas</h3>
        <div className="bg-gray-800/50 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 p-8">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>

      {/* User Journey Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-light mb-6">User Journey</h3>
        <div className="bg-gray-800/50 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20 p-8">
          <div className="space-y-8">
            <p className="text-xl text-gray-300">
              As a designer understanding their product it may be easy to overlook how someone may interact with a program in real time, but with the User Journey map we can see more realistically what occurs at each step.
            </p>

            <div className="relative aspect-video w-full">
              <Image
                src="/userjourney.png"
                alt="User Journey Map"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                As a designer selling their product to project coordinators and stake holders, it is crucial to show in fun, simple terms where and how their products would be used. This kind of set up is perfect for slide show environments.
              </p>
              <p className="text-xl text-gray-300">
                At this point in the stakeholder presentation it is important to be able to speak through the process as if it's an unfolding story that we all could relate to.
              </p>
              <p className="text-xl text-gray-300 italic">
                A tale as old as time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}