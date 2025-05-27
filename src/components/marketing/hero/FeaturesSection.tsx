import React from 'react';

export function FeaturesSection() {
    const features = [
        {
            title: "Secure Storage",
            description: "End-to-end encryption keeps your files safe and private",
            icon: "🔒",
            color: "bg-blue-100 text-blue-700"
        },
        {
            title: "Easy Sharing",
            description: "Share files and folders with customizable permissions",
            icon: "🔗",
            color: "bg-purple-100 text-purple-700"
        },
        {
            title: "Version Control",
            description: "Track changes and restore previous versions of your files",
            icon: "🔄",
            color: "bg-green-100 text-green-700"
        },
        {
            title: "Fast Access",
            description: "Distributed architecture ensures quick access from anywhere",
            icon: "⚡",
            color: "bg-amber-100 text-amber-700"
        },
        {
            title: "Scalable Storage",
            description: "Start small and scale as your storage needs grow",
            icon: "📈",
            color: "bg-red-100 text-red-700"
        },
        {
            title: "Smart Search",
            description: "Find any file instantly with powerful search capabilities",
            icon: "🔍",
            color: "bg-teal-100 text-teal-700"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Powerful Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Everything you need for efficient and secure cloud storage
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                    >
                        <div className="p-8">
                            <div className={`inline-block p-4 rounded-lg ${feature.color} text-2xl mb-4`}>
                                <span className="text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}