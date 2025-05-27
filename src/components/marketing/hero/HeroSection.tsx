import { motion } from 'framer-motion';


function CloudAnimation(){
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="relative w-full h-full">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 20}%`,
                        }}
                        animate={{
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                        }}
                        transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: Math.random() * 10 + 10,
                        }}
                    />
                ))}
            </div>
        </div>
  );
}

export function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <CloudAnimation />
                </div>
      
                <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Simple Cloud Storage Service
                            <span className="inline-block ml-2 relative">
                            SCS<sup className="text-2xl md:text-3xl absolute top-0">2</sup>
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Secure, scalable cloud storage with the power of microservices
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                            >
                                Get Started
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-all"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
      
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}