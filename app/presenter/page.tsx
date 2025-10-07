'use client';

import { useState } from 'react';
import { presenters, sessions, topics, tracks } from '@/lib/mock-data';

export default function PresenterPage() {
  const [view, setView] = useState<'dashboard' | 'submit'>('dashboard');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    presenterName: '',
    email: '',
    affiliation: '',
    topic: topics[0],
    track: tracks[0],
    bio: ''
  });
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Mock presenter (in real app, would come from auth)
  const currentPresenter = presenters[0];
  const presenterSessions = sessions.filter(s => s.presenterId === currentPresenter.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        title: '',
        description: '',
        presenterName: '',
        email: '',
        affiliation: '',
        topic: topics[0],
        track: tracks[0],
        bio: ''
      });
      setUploadedFile(null);
      setView('dashboard');
    }, 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#FDB913] mb-2">Presenter Portal</h1>
        <p className="text-gray-600">Manage your presentations and submit new abstracts</p>
      </div>

      {/* View Toggle */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setView('dashboard')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            view === 'dashboard'
              ? 'bg-[#000000] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } shadow-md`}
        >
          My Presentations
        </button>
        <button
          onClick={() => setView('submit')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            view === 'submit'
              ? 'bg-[#FDB913] text-black'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } shadow-md`}
        >
          Submit Abstract
        </button>
      </div>

      {view === 'dashboard' ? (
        <div>
          {/* Presenter Info */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-[#000000] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {currentPresenter.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-black mb-1">{currentPresenter.name}</h2>
                <p className="text-gray-600 mb-1">{currentPresenter.title}</p>
                <p className="text-gray-600 mb-2">{currentPresenter.affiliation}</p>
                <p className="text-sm text-gray-500">{currentPresenter.email}</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">{currentPresenter.bio}</p>
            </div>
          </div>

          {/* Sessions */}
          <h2 className="text-2xl font-bold text-black mb-4">Your Scheduled Presentations</h2>
          <div className="space-y-4">
            {presenterSessions.map(session => (
              <div key={session.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{session.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-[#000000] text-white px-2 py-1 rounded">
                        {session.track}
                      </span>
                      <span className="text-xs bg-[#FDB913] text-black px-2 py-1 rounded">
                        {session.topic}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Confirmed
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{session.description}</p>

                <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <strong className="mr-1">Date:</strong> {formatDate(session.date)}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <strong className="mr-1">Time:</strong> {formatTime(session.startTime)} - {formatTime(session.endTime)}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <strong className="mr-1">Room:</strong> {session.room}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-[#000000] text-white rounded-md hover:bg-[#0A2F5F] transition-colors">
                    Upload Slides
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
          <h2 className="text-2xl font-bold text-black mb-6">Submit New Abstract</h2>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Abstract Submitted!</h3>
              <p className="text-gray-600">Your abstract has been received and will be reviewed by the program committee.</p>
              <p className="text-sm text-gray-500 mt-2">You will receive a confirmation email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presentation Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  placeholder="Enter presentation title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Abstract/Description * (250-500 words)
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  placeholder="Describe your presentation, learning objectives, and key takeaways"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presenter Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.presenterName}
                    onChange={(e) => setFormData({ ...formData, presenterName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Affiliation/Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formData.affiliation}
                  onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  placeholder="University, agency, or organization"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic Category *
                  </label>
                  <select
                    required
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  >
                    {topics.map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Track *
                  </label>
                  <select
                    required
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  >
                    {tracks.map(track => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Bio (100 words max)
                </label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                  placeholder="Brief professional biography"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supporting Materials (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {uploadedFile ? (
                      <p className="text-sm text-green-600">Uploaded: {uploadedFile}</p>
                    ) : (
                      <>
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, PPT, DOC (max 10MB)</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#FDB913] text-black rounded-md font-bold hover:bg-[#f5c842] transition-colors"
                >
                  Submit Abstract
                </button>
                <button
                  type="button"
                  onClick={() => setView('dashboard')}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
