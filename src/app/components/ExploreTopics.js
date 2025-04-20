// components/ExploreTopics.js
import Link from 'next/link';

const exploreTopics = [
  { name: 'Productivity', href: '/topics/productivity' },
  { name: 'Health & Wellness', href: '/topics/health-wellness' },
  { name: 'Travel', href: '/topics/travel' },
  { name: 'Technology', href: '/topics/technology' },
  { name: 'Food & Drink', href: '/topics/food-drink' },
  // Example: Adding duplicates to showcase count display
  { name: 'Productivity', href: '/topics/productivity' },
  { name: 'Technology', href: '/topics/technology' },
];

export default function ExploreTopics() {
  // Create a map to count occurrences of each topic name
  const topicCount = exploreTopics.reduce((acc, topic) => {
    acc[topic.name] = (acc[topic.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="w-full max-w-[370px] rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
      <h4 className="mb-7.5 text-custom-4 font-semibold text-dark">
        Explore Topics
      </h4>
      <div className="flex flex-col gap-4">
        {exploreTopics.map((topic, index) => (
          <Link key={index} href={topic.href} className="flex justify-between text-sm font-medium text-dark hover:text-primary">

            <span>{topic.name}</span>
            <span className="ml-2 text-xs text-gray-500">({topicCount[topic.name]})</span>

          </Link>
        ))}
      </div>
    </div>
  );
}
