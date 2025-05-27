import React from 'react';

// CTA section
export function CtaSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to experience better cloud storage?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust SCS² for their storage needs. Get started with a free account today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all text-lg transform hover:scale-105 active:scale-95">
                            Get Started for Free
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-all text-lg transform hover:scale-105 active:scale-95">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}