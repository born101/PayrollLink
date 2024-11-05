import React from 'react';
import { Code2, ArrowRight, MessageSquare, Download } from 'lucide-react';

export default function Integration() {
  return (
    <section id="integration" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Easy API Integration
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Our REST API makes it simple to integrate payroll systems and access employee data securely.
            </p>
            
            <div className="mt-10 space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Code2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">RESTful API</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Modern REST API with comprehensive documentation and examples.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Quick Setup</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get started in minutes with our SDK and sample code.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Download SDK <Download className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50">
                Contact Sales <MessageSquare className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="flex bg-gray-900 px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300">
                  <code>{`// Initialize the PayrollLink client
const client = new PayrollLink({
  apiKey: 'your_api_key'
});

// Fetch employee data
const employee = await client.employees.get({
  employeeId: 'EMP123'
});

// Start payroll deduction
const deduction = await client.deductions.create({
  employeeId: 'EMP123',
  amount: 500,
  frequency: 'MONTHLY',
  startDate: '2024-04-01'
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}