import React from 'react';
import { Clock, Target, BarChart, Brain, Heart, AlertCircle, Search } from 'lucide-react';

interface SurveyQuestionProps {
  question: string;
  findings: string;
  insights: string;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({ question, findings, insights }) => (
  <div className="space-y-2">
    <h4 className="text-xl text-blue-400">{question}</h4>
    <p className="text-gray-400"><span className="font-medium">Findings:</span> {findings}</p>
    <p className="text-gray-400"><span className="font-medium">Insights:</span> {insights}</p>
  </div>
);

interface FindingProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Finding: React.FC<FindingProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 text-blue-400">
      {icon}
    </div>
    <div>
      <h4 className="text-xl mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default function UserResearch() {
  const surveyQuestions = [
    {
      question: "How much time do you use on reviewing sales?",
      findings: "Ranging from 0-2 hours, usually around 30 minutes a week",
      insights: "Even those who feel like they're not good enough to be a great entrepreneur want to know how they're doing with sales. Art Pocketbook would fill this need without their concerted efforts."
    },
    {
      question: "Do you have a target audience and do you think you reach them?",
      findings: "Split yes and no",
      insights: "Not having a target audience is akin to not having a plan of action. As an artist it is hard to conceptualize the need to earn money capitalistically, but only by doing so can we know how to direct one's creative output."
    },
    {
      question: "Have you used an app like this before and did it help?",
      findings: "Some use sites like Etsy, but mostly No",
      insights: "The sites that artists already use are those that also can facilitate the sales themselves. This shows that 'sales reviews' are often simply a happy byproduct of a necessary sales site."
    },
    {
      question: "What would you want to learn from monitoring your sales?",
      findings: "What are my running totals? What is selling well right now? What did I sell this month?",
      insights: "The same artists that claim they do not care who their target audience is also declare they want to know very specific things about their sales. This shows there is a large audience for a sales application designed for the disenfranchised artists."
    },
    {
      question: "How do you feel when confronted with the issue of reviewing your sales?",
      findings: "Stress. Stress. Stress.",
      insights: "It doesn't matter where an artist is in their journey, this is the factor that all can agree on. The goal of Art Pocketbook is to take away the stress and anxiety in order to help them focus on their own creative works."
    }
  ];

  const keyFindings = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Management",
      description: "Artists spend 0-2 hours weekly reviewing sales, typically around 30 minutes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Targeting",
      description: "Split response on understanding and reaching target audience"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Sales Analysis Needs",
      description: "Artists want to track running totals, current trends, and monthly performance"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Current Solutions",
      description: "Most artists rely on basic platform analytics from sales sites like Etsy"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Impact",
      description: "Universal stress response when confronting sales analysis tasks"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Survey Questions Section */}
      <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm">
        <h3 className="text-2xl font-light mb-6">Research Questions & Insights</h3>
        <div className="space-y-8">
          {surveyQuestions.map((q, index) => (
            <SurveyQuestion key={index} {...q} />
          ))}
        </div>
      </div>

      {/* Key Findings Section */}
      <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm">
        <h3 className="text-2xl font-light mb-6">Key Survey Findings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyFindings.map((finding, index) => (
            <Finding key={index} {...finding} />
          ))}
        </div>
      </div>

      {/* Market Analysis Findings */}
      <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm">
        <h3 className="text-2xl font-light mb-6">Key Market Analysis Findings</h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Most platforms lack comprehensive preview access</li>
          <li>• Limited platform integration capabilities across the board</li>
          <li>• Sales analysis tools are generally basic or nonexistent</li>
          <li>• Educational resources are rare among competitors</li>
          <li>• Sales platform functionality is mixed across solutions</li>
        </ul>
      </div>

      {/* Critical Pain Points */}
      <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm">
        <h3 className="text-2xl font-light mb-8">Critical Pain Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
            <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
            <h4 className="text-xl text-red-400 mb-2">Stress</h4>
            <p className="text-gray-400">Initial overwhelm prevents engagement with analytics tools</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
            <Brain className="w-12 h-12 text-red-400 mb-4" />
            <h4 className="text-xl text-red-400 mb-2">Confusion</h4>
            <p className="text-gray-400">Difficulty interpreting and applying data insights</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
            <Search className="w-12 h-12 text-red-400 mb-4" />
            <h4 className="text-xl text-red-400 mb-2">Narrow Scope</h4>
            <p className="text-gray-400">Lack of cross-platform integration complicates analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
}