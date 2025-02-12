import React from 'react';
import Image from 'next/image';

export default function ABTesting() {
  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-light mb-8">Ideate</h2>

      {/* Test Results */}
      <h3 className="text-3xl font-light mb-8">Testing</h3>
      <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-6">Testing Approach</h3>
            <p className="text-gray-300">
              Testing with 5 users revealed 80% of usability issues - efficient as a well-oiled machine.
              Each iteration brought improvements in:
            </p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Visual presentation of data</li>
              <li>• Platform integration workflows</li>
              <li>• Goal setting and tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-light mb-6">Key Improvements</h3>
            <ul className="space-y-4 text-gray-300">
              <li>• More images, less text for better artist engagement</li>
              <li>• Simplified platform connection process</li>
              <li>• Enhanced visual goal tracking</li>
              <li>• Streamlined sales review process</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prototypes Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-light mb-8">Prototypes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Low Fidelity Prototype */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-full h-[500px] relative">
              <Image 
                src="/lowprototype.png" 
                alt="Low Fidelity Prototype" 
                fill
                className="object-contain"
              />
            </div>
            <a 
              href="https://www.figma.com/proto/f5z4XiE2MPCzL1yGaK3BkI/Noticed-Art?node-id=1-8&node-type=canvas&t=kMfO1jCR9je5NRCD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A8&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors ring-2 ring-blue-300 text-white"
            >
              View Low Fidelity Prototype
            </a>
          </div>

          {/* High Fidelity Prototype */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-full h-[500px] relative">
              <Image 
                src="/hiprototype.png" 
                alt="High Fidelity Prototype" 
                fill
                className="object-contain"
              />
            </div>
            <a 
              href="https://app.uizard.io/p/f08138ff"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors ring-2 ring-blue-300 text-white"
            >
              View High Fidelity Prototype
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-light mb-6">Project Impact</h3>
        <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-blue-400/20">
          <h4 className="text-2xl font-light mb-6">Business Value</h4>
          <p className="text-xl text-gray-300">
            Our iterative design process and user testing demonstrated clear ROI, 
            with each improvement directly addressing user needs and market gaps. 
            The final product provides tangible value for artists managing their 
            business across multiple platforms, reducing stress and improving efficiency 
            across all aspects of their sales analysis process.
          </p>
        </div>
      </div>
    </div>
  );
}