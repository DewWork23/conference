import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#000000] to-[#0A2F5F] text-white rounded-lg p-12 mb-12 shadow-xl">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Voices from the Field</h1>
          <p className="text-2xl mb-6 text-[#FDB913]">Southeastern Social Work Conference</p>
          <div className="flex flex-wrap gap-6 text-lg mb-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              March 26-27, 2026
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              UNC Pembroke Campus
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-8">
            Join social work practitioners, educators, students, and advocates as we explore critical issues
            impacting rural and underserved communities across the Southeast. Engage in meaningful dialogue
            about policy, education, justice, and ethics in social work practice.
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-[#FDB913] text-[#000000] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#f5c842] transition-colors"
          >
            View Schedule
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#000000]">
          <div className="text-4xl font-bold text-[#000000] mb-2">30</div>
          <div className="text-gray-600">Sessions</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#FDB913]">
          <div className="text-4xl font-bold text-[#000000] mb-2">20</div>
          <div className="text-gray-600">Expert Presenters</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#000000]">
          <div className="text-4xl font-bold text-[#000000] mb-2">6</div>
          <div className="text-gray-600">Topic Tracks</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#FDB913]">
          <div className="text-4xl font-bold text-[#000000] mb-2">37.5</div>
          <div className="text-gray-600">CEU Credits</div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/schedule" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#000000]">Conference Schedule</h2>
          <p className="text-gray-600">Browse sessions, filter by topic, and build your personal agenda</p>
        </Link>

        <Link href="/presenter" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#FDB913] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#000000]">Presenter Portal</h2>
          <p className="text-gray-600">Submit abstracts, upload materials, and view your presentation schedule</p>
        </Link>

        <Link href="/evaluations" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#000000]">Session Evaluations</h2>
          <p className="text-gray-600">Provide feedback on sessions to help improve future conferences</p>
        </Link>

        <Link href="/announcements" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#FDB913] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#000000]">Announcements</h2>
          <p className="text-gray-600">Stay updated with the latest conference news and updates</p>
        </Link>

        <Link href="/ceu" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#000000]">CEU Tracking</h2>
          <p className="text-gray-600">Track your continuing education credits and download certificates</p>
        </Link>

        <Link href="/networking" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#FDB913] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#000000]">Networking</h2>
          <p className="text-gray-600">Connect with fellow attendees, presenters, and social work professionals</p>
        </Link>
      </div>

      {/* Conference Topics */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-[#000000]">Conference Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Trauma-Informed Care', 'Policy Advocacy', 'Rural Social Work', 'Cultural Competency',
            'Mental Health', 'Substance Use', 'Social Justice', 'Child Welfare',
            'Healthcare Access', 'Ethics', 'Community Development', 'DEI'].map(topic => (
            <div key={topic} className="border border-gray-200 rounded-lg p-3 text-center hover:border-[#FDB913] transition-colors">
              <span className="text-sm font-medium text-gray-700">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
