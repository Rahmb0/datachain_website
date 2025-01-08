import { StarIcon, GitBranchIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export function GitHubCTA() {
  const [stats, setStats] = useState({ stars: 0, forks: 0 });
  const repoUrl = 'https://github.com/Rahmb0/DataChain';

  useEffect(() => {
    fetch('https://api.github.com/repos/Rahmb0/DataChain')
      .then(res => res.json())
      .then(data => {
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count
        });
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contribute to DataChain
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          DataChain is open source and welcomes contributions from developers worldwide.
          Help us build the future of decentralized data economy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href={repoUrl} 
             className="flex items-center gap-2 primary-button"
             target="_blank"
             rel="noopener noreferrer">
            <GitBranchIcon className="h-5 w-5" />
            Fork on GitHub
          </a>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span>{stats.stars} stars</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow">
              <GitBranchIcon className="h-5 w-5 text-indigo-400" />
              <span>{stats.forks} forks</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
          <div className="text-left bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <code className="block text-sm">
              git clone https://github.com/Rahmb0/DataChain.git<br/>
              cd DataChain<br/>
              npm install<br/>
              npm run dev
            </code>
          </div>
        </div>
      </div>
    </section>
  );
} 