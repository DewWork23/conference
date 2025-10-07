'use client';

import { useState } from 'react';
import { sessions } from '@/lib/mock-data';
import { useFavorites } from '@/contexts/FavoritesContext';

export default function CEUPage() {
  const { favorites } = useFavorites();
  const [attendedSessions, setAttendedSessions] = useState<string[]>([]);

  const toggleAttended = (sessionId: string) => {
    setAttendedSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const attendedSessionsList = sessions.filter(s => attendedSessions.includes(s.id));
  const totalCEU = attendedSessionsList.reduce((sum, session) => sum + session.ceuCredits, 0);

  const downloadCertificate = () => {
    alert('In a real app, this would generate and download a PDF certificate with your CEU credits.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#FDB913] mb-2">CEU Tracking</h1>
        <p className="text-[#FDB913]">Track your continuing education credits and download certificates</p>
      </div>

      {/* CEU Summary Card */}
      <div className="bg-gradient-to-r from-[#000000] to-[#0A2F5F] text-white rounded-lg p-8 mb-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your CEU Credits</h2>
            <p className="text-gray-300">Southeastern Social Work Conference 2026</p>
          </div>
          <div className="w-24 h-24 bg-[#FDB913] rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">{totalCEU}</div>
              <div className="text-xs text-black">Credits</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm text-gray-300 mb-1">Sessions Attended</div>
            <div className="text-2xl font-bold">{attendedSessions.length}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm text-gray-300 mb-1">Available Credits</div>
            <div className="text-2xl font-bold">37.5</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm text-gray-300 mb-1">Progress</div>
            <div className="text-2xl font-bold">{Math.round((totalCEU / 37.5) * 100)}%</div>
          </div>
        </div>

        {totalCEU > 0 && (
          <button
            onClick={downloadCertificate}
            className="mt-6 w-full md:w-auto px-8 py-3 bg-[#FDB913] text-black rounded-lg font-bold hover:bg-[#f5c842] transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Certificate
          </button>
        )}
      </div>

      {/* Requirements Info */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-bold text-blue-900 mb-1">CEU Certificate Requirements</h3>
            <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
              <li>Check sessions you attended below</li>
              <li>Complete evaluation for each attended session</li>
              <li>Complete the conference survey</li>
              <li>Certificates will be emailed within 2 weeks after the conference</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sessions Checklist */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Mark Attended Sessions</h2>
        <p className="text-sm text-gray-600 mb-6">
          Check the sessions you attended. {favorites.length > 0 && `Your favorited sessions (${favorites.length}) are highlighted.`}
        </p>

        <div className="space-y-3">
          {sessions.map(session => {
            const isAttended = attendedSessions.includes(session.id);
            const isFavorited = favorites.includes(session.id);

            return (
              <div
                key={session.id}
                className={`border rounded-lg p-4 transition-colors ${
                  isFavorited ? 'border-[#FDB913] bg-[#FDB913]/5' : 'border-gray-200'
                } ${isAttended ? 'bg-green-50' : ''}`}
              >
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={isAttended}
                    onChange={() => toggleAttended(session.id)}
                    className="w-5 h-5 text-black border-gray-300 rounded focus:ring-[#000000] mt-1 mr-4 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-black mb-1">{session.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="text-xs bg-[#000000] text-white px-2 py-1 rounded">
                            {session.track}
                          </span>
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                            {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {session.startTime}
                          </span>
                          {isFavorited && (
                            <span className="text-xs bg-[#FDB913] text-black px-2 py-1 rounded flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Favorited
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{session.room}</p>
                      </div>
                      <div className="ml-4 text-right flex-shrink-0">
                        <div className="text-lg font-bold text-black">{session.ceuCredits}</div>
                        <div className="text-xs text-gray-600">CEU</div>
                      </div>
                    </div>
                    {isAttended && (
                      <div className="mt-2 flex items-center text-sm text-green-700">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Marked as attended
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Attended Sessions Summary */}
      {attendedSessionsList.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Your Attended Sessions Summary</h2>
          <div className="space-y-2">
            {attendedSessionsList.map(session => (
              <div key={session.id} className="flex justify-between items-center border-b pb-2">
                <span className="text-sm text-gray-700">{session.title}</span>
                <span className="text-sm font-bold text-black">{session.ceuCredits} CEU</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 font-bold text-lg">
              <span className="text-black">Total CEU Credits:</span>
              <span className="text-[#FDB913]">{totalCEU}</span>
            </div>
          </div>
        </div>
      )}

      {/* CEU Info */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-black mb-4">About CEU Credits</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>Continuing Education Units (CEUs)</strong> are offered for licensed social workers and other eligible professionals.
          </p>
          <p>
            The Southeastern Social Work Conference is approved by the North Carolina Social Work Certification and Licensure Board
            as a continuing education provider.
          </p>
          <p>
            <strong>Provider Number:</strong> MOCK-123456
          </p>
          <p>
            <strong>Categories:</strong> Sessions qualify for Clinical, Supervision, and General CEUs based on content.
          </p>
        </div>
      </div>
    </div>
  );
}
