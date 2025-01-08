import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Decentralized Data Economy for AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 
                        max-w-2xl mx-auto">
            Monetize your data contributions in a secure, fair, and equitable marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">View Documentation</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 