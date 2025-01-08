import { Card } from './ui/Card';

export function FeatureCard({ title, description, icon }) {
  return (
    <Card className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 text-primary-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
} 