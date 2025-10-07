'use client';

import { useState } from 'react';
import { attendees, presenters } from '@/lib/mock-data';

export default function NetworkingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  // Combine attendees and presenters for directory
  const allParticipants = [
    ...attendees.map(a => ({ ...a, type: 'attendee' as const })),
    ...presenters.map(p => ({ id: p.id, name: p.name, affiliation: p.affiliation, role: p.title, type: 'presenter' as const }))
  ];

  const filteredParticipants = allParticipants.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.affiliation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || p.type === selectedRole;
    return matchesSearch && matchesRole;
  });

  const roles = Array.from(new Set(allParticipants.map(p => p.type)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#FDB913] mb-2">Networking</h1>
        <p className="text-[#FDB913]">Connect with fellow attendees and presenters</p>
      </div>

      {/* Networking Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Attendee Directory</h3>
          <p className="text-sm text-gray-600">Browse and connect with {allParticipants.length} conference participants</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-[#FDB913] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Networking Events</h3>
          <p className="text-sm text-gray-600">Evening reception on March 26 at 5:30 PM</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-[#000000] rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-black mb-2">Interest Groups</h3>
          <p className="text-sm text-gray-600">Connect based on practice area and interests</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Participants</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or affiliation..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
            >
              <option value="all">All Participants ({allParticipants.length})</option>
              <option value="presenter">Presenters ({presenters.length})</option>
              <option value="attendee">Attendees ({attendees.length})</option>
            </select>
          </div>
        </div>
      </div>

      {/* Participants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParticipants.map(participant => (
          <div key={participant.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className={`w-16 h-16 ${participant.type === 'presenter' ? 'bg-[#FDB913]' : 'bg-[#000000]'} rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                {participant.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-black text-lg mb-1">{participant.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  participant.type === 'presenter'
                    ? 'bg-[#FDB913] text-black'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {participant.type === 'presenter' ? 'Presenter' : 'Attendee'}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {participant.role}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {participant.affiliation}
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-[#000000] text-white rounded-md hover:bg-[#0A2F5F] transition-colors text-sm font-medium">
              Connect
            </button>
          </div>
        ))}
      </div>

      {filteredParticipants.length === 0 && (
        <div className="bg-white p-12 rounded-lg shadow-md text-center">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-gray-600">No participants found matching your search.</p>
        </div>
      )}

      {/* Interest Groups */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-black mb-6">Interest Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Rural Social Work', members: 45, color: 'bg-blue-100 text-blue-800' },
            { name: 'Clinical Practice', members: 67, color: 'bg-green-100 text-green-800' },
            { name: 'Child Welfare', members: 38, color: 'bg-purple-100 text-purple-800' },
            { name: 'Policy & Advocacy', members: 29, color: 'bg-red-100 text-red-800' },
            { name: 'Mental Health', members: 52, color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Social Justice', members: 41, color: 'bg-pink-100 text-pink-800' }
          ].map(group => (
            <div key={group.name} className="border border-gray-200 rounded-lg p-4 hover:border-[#FDB913] transition-colors cursor-pointer">
              <h3 className="font-bold text-black mb-2">{group.name}</h3>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-3 py-1 rounded-full ${group.color}`}>
                  {group.members} members
                </span>
                <button className="text-sm text-black hover:underline font-medium">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Networking Tips */}
      <div className="mt-8 bg-gradient-to-r from-[#000000] to-[#0A2F5F] text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Networking Tips</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Attend the networking reception on March 26 at 5:30 PM
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Arrive early to sessions to meet presenters and other attendees
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Join interest groups aligned with your practice area
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Exchange contact information with colleagues working on similar issues
          </li>
        </ul>
      </div>
    </div>
  );
}
