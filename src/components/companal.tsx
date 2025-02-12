import React from 'react';

interface CompetitorProps {
  name: string;
  preview: string;
  platform: string;
  sales: string;
  education: string;
  salesPlatform: string;
}

const CompetitorRow: React.FC<CompetitorProps> = ({
  name,
  preview,
  platform,
  sales,
  education,
  salesPlatform
}) => (
  <tr className="border-b border-gray-700">
    <td className="p-4">{name}</td>
    <td className="p-4">{preview}</td>
    <td className="p-4">{platform}</td>
    <td className="p-4">{sales}</td>
    <td className="p-4">{education}</td>
    <td className="p-4">{salesPlatform}</td>
  </tr>
);

export default function CompetitiveAnalysis() {
  const competitors = [
    {
      name: "ArtLook",
      preview: "No",
      platform: "No",
      sales: "Partial",
      education: "No",
      salesPlatform: "No"
    },
    {
      name: "ArtMois Studio",
      preview: "No",
      platform: "Shopify",
      sales: "Partial",
      education: "No",
      salesPlatform: "No"
    },
    {
      name: "Artwork Archive",
      preview: "Yes",
      platform: "AA to Site",
      sales: "Partial",
      education: "No",
      salesPlatform: "Yes"
    },
    {
      name: "Art Cloud",
      preview: "Partial",
      platform: "No",
      sales: "No",
      education: "No",
      salesPlatform: "Yes"
    },
    {
      name: "Art Logic",
      preview: "Partial",
      platform: "No",
      sales: "No",
      education: "Yes",
      salesPlatform: "Yes"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-light mb-8">Competitive Analysis</h2>
      <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm overflow-x-auto">
        <p className="text-xl text-gray-400 mb-6">
          Laid out in an easy-to-read, easy-to-explain format, comparing key features across major platforms in the market.
        </p>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 font-light">Platform</th>
              <th className="p-4 font-light">Preview Access</th>
              <th className="p-4 font-light">Platform Integration</th>
              <th className="p-4 font-light">Sales Analysis</th>
              <th className="p-4 font-light">Educational Tools</th>
              <th className="p-4 font-light">Sales Platform</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <CompetitorRow key={index} {...competitor} />
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <h3 className="text-xl font-light mb-4">Key Findings</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• Most platforms lack comprehensive preview access</li>
            <li>• Limited platform integration capabilities across the board</li>
            <li>• Sales analysis tools are generally basic or nonexistent</li>
            <li>• Educational resources are rare among competitors</li>
            <li>• Sales platform functionality is mixed across solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}