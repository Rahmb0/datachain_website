export const SITE_CONFIG = {
  name: 'DataChain',
  description: 'A Decentralized Economy for the Age of AI',
  github: 'https://github.com/Rahmb0/DataChain',
  discord: 'https://discord.gg/Cbqg4gFt',
  email: 'info@datachain.sh'
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'Wiki', path: '/wiki' },
  { name: 'Community', path: '/community' }
];

export const features = [
  {
    title: 'Secure Data Storage',
    description: 'End-to-end encrypted storage with zero-knowledge proofs ensuring your data remains private.',
    icon: 'ShieldCheckIcon',
  },
  {
    title: 'Token Rewards',
    description: 'Earn DataCoin tokens automatically when AI systems utilize your data.',
    icon: 'CurrencyDollarIcon',
  },
  {
    title: 'AI Integration',
    description: 'Seamless API access for AI systems to discover and purchase relevant datasets.',
    icon: 'ChipIcon',
  },
  // Add more features...
];

export const GITHUB_INFO = {
  repo: 'Rahmb0/DataChain',
  url: 'https://github.com/Rahmb0/DataChain',
  branch: 'main',
  contributingGuide: 'CONTRIBUTING.md',
  issues: 'https://github.com/Rahmb0/DataChain/issues'
};

export const CONTRIBUTION_STEPS = [
  {
    title: 'Fork the Repository',
    description: 'Create your own copy of the project to work on.',
    command: `git clone https://github.com/Rahmb0/DataChain.git`
  },
  {
    title: 'Create a Branch',
    description: 'Make your changes in a new git branch.',
    command: 'git checkout -b feature/your-feature-name'
  },
  {
    title: 'Submit Changes',
    description: 'Push your changes and create a pull request.',
    command: 'git push origin feature/your-feature-name'
  }
];

export const seoConfig = {
  siteName: 'DataChain',
  siteUrl: 'https://datachain.sh',
  defaultImage: 'https://datachain.sh/og-image.png',
  twitterHandle: '@DataChainHQ',
  author: 'DataChain Team',
  logo: 'https://datachain.sh/logo.png',
  keywords: [
    'blockchain',
    'data marketplace',
    'AI data',
    'decentralized economy',
    'data monetization',
    'Web3',
    'cryptocurrency',
    'data economy'
  ],
  socialLinks: {
    github: 'https://github.com/Rahmb0/DataChain',
    twitter: 'https://twitter.com/DataChainHQ',
    discord: 'https://discord.gg/datachain'
  }
};

export const marketingConfig = {
  gtag: 'G-XXXXXXXXXX', // Replace with actual Google Analytics ID
  plausible: 'datachain.sh',
  newsletter: {
    provider: 'convertkit', // or other newsletter service
    formId: 'YOUR_FORM_ID'
  }
}; 