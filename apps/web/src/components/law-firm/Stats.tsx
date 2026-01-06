interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
  primaryColor?: string;
}

export function Stats({ stats, primaryColor = '#1e4d7b' }: StatsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p
                className="text-4xl font-bold tracking-tight"
                style={{ color: primaryColor }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { Stat };
