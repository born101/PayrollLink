import React from 'react';
import { ArrowRight, Shield, Database, DollarSign, CheckCircle2, Zap, Building, ClipboardList } from 'lucide-react';

export default function Hero() {
  const benefits = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      text: "Reduce Loan Default Rates by up to 90%"
    },
    {
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      text: "Instant Loan Approvals within Minutes"
    },
    {
      icon: <Building className="h-5 w-5 text-blue-500" />,
      text: "One-Click Integration for Employers"
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Streamline Payroll Lending</span>
            <span className="block text-blue-600">with Secure API Integration</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect lenders with employee payroll data securely. Automate loan repayments through payroll deductions.
          </p>

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10 space-x-4">
            <button className="w-full sm:w-auto mb-4 sm:mb-0 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
              Request Demo <ClipboardList className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 bg-blue-600 rounded-lg p-3">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-gray-900">Secure Access</h3>
            <p className="mt-2 text-gray-500">Bank-level security for sensitive payroll data with encrypted transmission.</p>
          </div>

          <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 bg-blue-600 rounded-lg p-3">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-gray-900">Real-time Data</h3>
            <p className="mt-2 text-gray-500">Access current employment and salary information for instant verification.</p>
          </div>

          <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 bg-blue-600 rounded-lg p-3">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-gray-900">Automated Repayments</h3>
            <p className="mt-2 text-gray-500">Streamline collections with automated payroll deductions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}