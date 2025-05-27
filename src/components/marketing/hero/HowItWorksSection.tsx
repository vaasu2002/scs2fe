import React, { useState, useEffect } from 'react';

// How it works section with interactive demo
export function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            title: "Upload Your Files",
            description: "Drag and drop files or use the file picker to upload your content securely to the cloud.",
            icon: "📤"
        },
        {
            title: "Organize & Manage",
            description: "Create folders, add tags, and organize your files for easy access and management.",
            icon: "📁"
        },
        {
            title: "Share & Collaborate",
            description: "Share files with others and set permissions for viewing or editing your content.",
            icon: "👥"
        },
        {
            title: "Access Anywhere",
            description: "Access your files from any device, anywhere in the world, with our web and mobile apps.",
            icon: "🌐"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Simple and intuitive cloud storage in just a few steps
                    </p>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-1 bg-gray-100">
                                <div className="flex space-x-2 p-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="p-8 h-80 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                        <div
                            key={activeStep}
                            className="text-center transform transition-all duration-500"
                        >
                            <span className="text-7xl mb-4 block animate-bounce">{steps[activeStep].icon}</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {steps[activeStep].title}
                            </h3>
                            <p className="text-gray-600">{steps[activeStep].description}</p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-lg cursor-pointer transition-all transform hover:scale-105 ${
                                activeStep === index ? "bg-blue-600 text-white shadow-lg" : "bg-white shadow hover:shadow-md"
                            }`}
                            onClick={() => setActiveStep(index)}
                        >
                            <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                                    activeStep === index ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"
                                    }`}>
                                {index + 1}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">
                                        {step.title}
                                    </h4>
                                    <p className={activeStep === index ? "text-blue-100" : "text-gray-600"}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}