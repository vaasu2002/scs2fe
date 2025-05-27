import React, { useState } from 'react';

// FAQ section with accordion
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
        question: "How secure is my data with SCS²?",
        answer: "Your data is protected with end-to-end encryption, and we use industry-standard security protocols to ensure your files remain private and secure. We also offer two-factor authentication for an additional layer of security."
    },
    {
        question: "Can I access my files offline?",
        answer: "Yes, with our desktop and mobile applications, you can select files for offline access. These files will sync automatically when you're back online."
    },
    {
        question: "What happens if I exceed my storage limit?",
        answer: "You'll receive notifications as you approach your storage limit. Once you reach the limit, you can either upgrade your plan or free up space by deleting files. We never delete your files automatically."
    },
    {
        question: "How does file versioning work?",
        answer: "SCS² automatically keeps previous versions of your files when changes are made. You can view and restore these versions through the version history feature. The retention period depends on your plan."
    },
    {
        question: "Can I share files with people who don't have an SCS² account?",
        answer: "Yes, you can generate shareable links that allow anyone to access specific files or folders, even if they don't have an SCS² account. You can also set permissions and expiration dates for these links."
    },
    {
        question: "Is there a limit to file size uploads?",
        answer: "Free accounts have a 2GB per-file upload limit. Pro accounts can upload files up to 10GB, and Business accounts have a 50GB per-file limit. Our chunked upload technology ensures reliable uploads even for large files."
    }
  ];

    const toggleFaq = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about SCS²
            </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all transform hover:scale-105 ${
                    openIndex === index 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                    }`}
                >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <svg 
                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="p-6 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}