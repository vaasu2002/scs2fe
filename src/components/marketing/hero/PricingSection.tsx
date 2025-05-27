import React, { useState } from 'react';

// Pricing section with interactive cards
export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const plans = [
    {
        name: "Free",
        description: "Perfect for personal use",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        features: [
            "5 GB Storage",
            "Basic file sharing",
            "Web access",
            "Email support"
        ],
        cta: "Get Started",
        highlighted: false
    },
    {
        name: "Pro",
        description: "For professionals and small teams",
        monthlyPrice: "$9.99",
        yearlyPrice: "$99.99",
        features: [
            "100 GB Storage",
            "Advanced sharing options",
            "Version history (30 days)",
            "Web & mobile access",
            "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: true
    },
    {
        name: "Business",
        description: "For organizations with advanced needs",
        monthlyPrice: "$24.99",
        yearlyPrice: "$249.99",
        features: [
            "1 TB Storage",
            "Team folders",
            "Advanced permissions",
            "Version history (90 days)",
            "Admin controls",
            "24/7 support"
        ],
        cta: "Contact Sales",
        highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that works for you
          </p>
          
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mb-8">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                billingPeriod === 'monthly' ? 'bg-white shadow-sm' : ''
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                billingPeriod === 'yearly' ? 'bg-white shadow-sm' : ''
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly <span className="text-green-500 text-sm">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-xl ring-4 ring-blue-500/30' 
                  : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {billingPeriod === 'monthly' ? '/month' : '/year'}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg 
                        className={`w-5 h-5 mr-2 ${plan.highlighted ? 'text-blue-200' : 'text-blue-500'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 ${
                    plan.highlighted 
                      ? 'bg-white text-blue-600 hover:bg-blue-50' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}