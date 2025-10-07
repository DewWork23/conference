'use client';

import { useState, useMemo } from 'react';
import { sessions, presenters, tracks, topics, rooms } from '@/lib/mock-data';
import { useFavorites } from '@/contexts/FavoritesContext';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<string>('all');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'all' | 'favorites'>('all');
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filteredSessions = useMemo(() => {
    return sessions.filter(session => {
      if (viewMode === 'favorites' && !isFavorite(session.id)) return false;
      if (selectedDate !== 'all' && session.date !== selectedDate) return false;
      if (selectedTrack !== 'all' && session.track !== selectedTrack) return false;
      if (selectedTopic !== 'all' && session.topic !== selectedTopic) return false;
      return true;
    });
  }, [selectedDate, selectedTrack, selectedTopic, viewMode, favorites, isFavorite]);

  const groupedSessions = useMemo(() => {
    const groups: Record<string, typeof sessions> = {};
    filteredSessions.forEach(session => {
      const key = `${session.date}-${session.startTime}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(session);
    });
    return groups;
  }, [filteredSessions]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getPresenterName = (presenterId: string) => {
    return presenters.find(p => p.id === presenterId)?.name || 'Unknown';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#FDB913] mb-2">Conference Schedule</h1>
        <p className="text-gray-600">Browse sessions and build your personal agenda</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">View Mode</label>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('all')}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'all'
                    ? 'bg-[#000000] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Sessions
              </button>
              <button
                onClick={() => setViewMode('favorites')}
                className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'favorites'
                    ? 'bg-[#FDB913] text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                My Agenda ({favorites.length})
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
            >
              <option value="all">All Days</option>
              <option value="2026-03-26">Day 1 - March 26</option>
              <option value="2026-03-27">Day 2 - March 27</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Track</label>
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
            >
              <option value="all">All Tracks</option>
              {tracks.map(track => (
                <option key={track} value={track}>{track}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>

        {(selectedDate !== 'all' || selectedTrack !== 'all' || selectedTopic !== 'all') && (
          <button
            onClick={() => {
              setSelectedDate('all');
              setSelectedTrack('all');
              setSelectedTopic('all');
            }}
            className="text-sm text-black hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Sessions */}
      <div className="space-y-8">
        {Object.keys(groupedSessions).length === 0 ? (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-gray-600">No sessions found matching your filters.</p>
            {viewMode === 'favorites' && favorites.length === 0 && (
              <p className="text-sm text-gray-500 mt-2">Click the star icon on sessions to add them to your agenda.</p>
            )}
          </div>
        ) : (
          Object.entries(groupedSessions)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, timeslotSessions]) => {
              const session = timeslotSessions[0];
              return (
                <div key={key}>
                  <div className="bg-[#000000] text-white px-6 py-3 rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-lg">{formatDate(session.date)}</div>
                        <div className="text-sm text-gray-300">
                          {formatTime(session.startTime)} - {formatTime(session.endTime)}
                        </div>
                      </div>
                      <div className="text-sm bg-[#FDB913] text-black px-3 py-1 rounded-full font-medium">
                        {session.ceuCredits} CEU
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-b-lg">
                    {timeslotSessions.map(s => (
                      <div key={s.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black mb-2">{s.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <span className="text-xs bg-[#000000] text-white px-2 py-1 rounded">
                                {s.track}
                              </span>
                              <span className="text-xs bg-[#FDB913] text-black px-2 py-1 rounded">
                                {s.topic}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleFavorite(s.id)}
                            className="ml-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            title={isFavorite(s.id) ? 'Remove from agenda' : 'Add to agenda'}
                          >
                            <svg
                              className={`w-6 h-6 ${isFavorite(s.id) ? 'text-[#FDB913] fill-current' : 'text-gray-400'}`}
                              fill={isFavorite(s.id) ? 'currentColor' : 'none'}
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{s.description}</p>
                        <div className="border-t pt-3 space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {getPresenterName(s.presenterId)}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {s.room}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
}
