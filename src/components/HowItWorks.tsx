import React from 'react';
import { Building2, UserCheck, LineChart, CheckCircle, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: 'Employer Integration',
      description: 'Companies integrate their payroll systems through our secure API or standalone system.'
    },
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: 'Employee Application',
      description: 'Employees apply for loans with their preferred lender using their employee ID.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: 'Lender Access',
      description: 'Lenders access verified employment and salary data through the portal.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Digital Agreement',
      description: 'Employee signs digital agreement for payroll deductions upon approval.'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
      title: 'Automated Tracking',
      description: 'System tracks repayments and provides real-time updates to lenders.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Simple, secure, and streamlined process for all parties
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute w-full h-0.5 bg-gray-200 top-1/2 transform -translate-y-1/2" />
            
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}