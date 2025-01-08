import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { GitHubCTA } from '../components/GitHubCTA';

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Features />
      <GitHubCTA />
      {/* Other sections */}
    </main>
  );
} 