interface Attorney {
  name: string;
  title: string;
  photo?: string;
  bio: string;
  education?: string[];
  barAdmissions?: string[];
  email?: string;
  phone?: string;
}

interface AttorneyCardProps {
  attorney: Attorney;
  primaryColor?: string;
}

export function AttorneyCard({ attorney, primaryColor = '#1e4d7b' }: AttorneyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Photo */}
      <div className="aspect-[4/5] bg-gray-200 relative">
        {attorney.photo ? (
          <img
            src={attorney.photo}
            alt={attorney.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{attorney.name}</h3>
        <p className="text-sm font-medium" style={{ color: primaryColor }}>
          {attorney.title}
        </p>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {attorney.bio}
        </p>

        {attorney.education && attorney.education.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Education</h4>
            <ul className="mt-1 text-sm text-gray-600">
              {attorney.education.map((edu, i) => (
                <li key={i}>{edu}</li>
              ))}
            </ul>
          </div>
        )}

        {attorney.barAdmissions && attorney.barAdmissions.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bar Admissions</h4>
            <p className="mt-1 text-sm text-gray-600">
              {attorney.barAdmissions.join(', ')}
            </p>
          </div>
        )}

        {(attorney.email || attorney.phone) && (
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2">
            {attorney.email && (
              <a
                href={`mailto:${attorney.email}`}
                className="text-sm hover:underline"
                style={{ color: primaryColor }}
              >
                {attorney.email}
              </a>
            )}
            {attorney.phone && (
              <a
                href={`tel:${attorney.phone.replace(/[^0-9]/g, '')}`}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {attorney.phone}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export type { Attorney };
