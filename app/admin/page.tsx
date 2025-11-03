'use client';

import { useState } from 'react';
import { sessions, presenters, attendees, announcements } from '@/lib/mock-data';

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'sessions' | 'abstracts' | 'announcements'>('overview');
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '', priority: 'normal' });
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);

  const mockAbstracts = [
    { id: 'abs1', title: 'Digital Social Work in Rural Communities', presenter: 'Dr. Emily Chen', status: 'approved', submitted: '2026-01-15' },
    { id: 'abs2', title: 'Addressing Food Insecurity Through Community Partnerships', presenter: 'James Wilson', status: 'pending', submitted: '2026-01-20' },
    { id: 'abs3', title: 'Culturally Responsive Practice with Indigenous Youth', presenter: 'Maria Blackfeather', status: 'pending', submitted: '2026-01-22' },
    { id: 'abs4', title: 'Telehealth Ethics in Clinical Social Work', presenter: 'Dr. Robert Hayes', status: 'approved', submitted: '2026-01-18' },
    { id: 'abs5', title: 'Anti-Oppressive Framework for Child Welfare', presenter: 'Angela Thompson', status: 'under review', submitted: '2026-01-25' },
  ];

  const stats = {
    totalSessions: sessions.length,
    totalPresenters: presenters.length,
    totalAttendees: attendees.length,
    totalAnnouncements: announcements.length,
    pendingAbstracts: mockAbstracts.filter(a => a.status === 'pending').length,
    approvedAbstracts: mockAbstracts.filter(a => a.status === 'approved').length,
  };

  const handleSendAnnouncement = () => {
    // Mock sending announcement
    alert(`Announcement "${newAnnouncement.title}" would be sent to all attendees`);
    setNewAnnouncement({ title: '', content: '', priority: 'normal' });
    setShowAnnouncementForm(false);
  };

  const getPresenterName = (presenterId: string) => {
    return presenters.find(p => p.id === presenterId)?.name || 'Unknown';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-black text-[#947843] leading-tight tracking-tight mb-2">Admin Dashboard</h1>
        <p className="text-xl text-[#3E5C73] font-semibold tracking-wide">Conference management and oversight</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'sessions', label: 'Sessions' },
          { id: 'abstracts', label: 'Abstracts' },
          { id: 'announcements', label: 'Send Announcement' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id as any)}
            className={`px-6 py-3 font-bold transition-colors duration-300 border-b-2 ${
              selectedTab === tab.id
                ? 'border-[#947843] text-[#947843] bg-gray-50'
                : 'border-transparent text-gray-600 hover:text-[#3E5C73]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {selectedTab === 'overview' && (
        <div>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#947843]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Sessions</p>
                  <p className="text-3xl font-bold text-[#947843]">{stats.totalSessions}</p>
                </div>
                <svg className="w-12 h-12 text-[#947843] opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#947843]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Presenters</p>
                  <p className="text-3xl font-bold text-[#947843]">{stats.totalPresenters}</p>
                </div>
                <svg className="w-12 h-12 text-[#947843] opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Registered Attendees</p>
                  <p className="text-3xl font-bold text-green-600">{stats.totalAttendees}</p>
                </div>
                <svg className="w-12 h-12 text-green-500 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#947843]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Announcements Sent</p>
                  <p className="text-3xl font-bold text-[#947843]">{stats.totalAnnouncements}</p>
                </div>
                <svg className="w-12 h-12 text-[#947843] opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Pending Abstracts</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.pendingAbstracts}</p>
                </div>
                <svg className="w-12 h-12 text-orange-500 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Approved Abstracts</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.approvedAbstracts}</p>
                </div>
                <svg className="w-12 h-12 text-purple-500 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#947843]">
            <h2 className="text-2xl font-bold text-[#947843] tracking-wide mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center py-2 border-b">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <p className="text-sm text-gray-700">New registration: Emily Rodriguez (UNC Pembroke)</p>
                <span className="ml-auto text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center py-2 border-b">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <p className="text-sm text-gray-700">Abstract submitted: "Digital Social Work in Rural Communities"</p>
                <span className="ml-auto text-xs text-gray-500">5 hours ago</span>
              </div>
              <div className="flex items-center py-2 border-b">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <p className="text-sm text-gray-700">Announcement sent: "Day 2 Continental Breakfast"</p>
                <span className="ml-auto text-xs text-gray-500">1 day ago</span>
              </div>
              <div className="flex items-center py-2 border-b">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <p className="text-sm text-gray-700">Session evaluation completed for "Trauma-Informed Care in Rural Settings"</p>
                <span className="ml-auto text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sessions Tab */}
      {selectedTab === 'sessions' && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#947843]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#947843] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold">Session Title</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Presenter</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Date/Time</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Room</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Track</th>
                  <th className="px-6 py-3 text-left text-sm font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sessions.slice(0, 10).map((session, index) => (
                  <tr key={session.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{getPresenterName(session.presenterId)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}<br/>
                      {session.startTime}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{session.room.split(' - ')[1]}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-[#947843] text-white px-2 py-1 rounded font-semibold">{session.track}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">Confirmed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Abstracts Tab */}
      {selectedTab === 'abstracts' && (
        <div className="space-y-4">
          {mockAbstracts.map(abstract => (
            <div key={abstract.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#947843]">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#3E5C73] tracking-wide mb-2">{abstract.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">Presenter: {abstract.presenter}</p>
                  <p className="text-xs text-gray-500">Submitted: {new Date(abstract.submitted).toLocaleDateString()}</p>
                </div>
                <div className="ml-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    abstract.status === 'approved' ? 'bg-green-100 text-green-800' :
                    abstract.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {abstract.status.charAt(0).toUpperCase() + abstract.status.slice(1)}
                  </span>
                </div>
              </div>
              {abstract.status === 'pending' && (
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm">
                    Reject
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm">
                    Request Revision
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Announcements Tab */}
      {selectedTab === 'announcements' && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl border-l-4 border-[#947843]">
          <h2 className="text-2xl font-bold text-[#947843] tracking-wide mb-6">Create New Announcement</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Announcement Title
              </label>
              <input
                type="text"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#947843] focus:border-transparent"
                placeholder="Enter announcement title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                rows={5}
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#947843] focus:border-transparent"
                placeholder="Enter announcement content"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <select
                value={newAnnouncement.priority}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, priority: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#947843] focus:border-transparent"
              >
                <option value="low">Low - General information</option>
                <option value="normal">Normal - Standard updates</option>
                <option value="high">High - Important/Urgent</option>
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-700 mb-2">Delivery Options</h4>
              <label className="flex items-center mb-2">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Send email notification to all attendees</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-700">Post to announcements feed</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-700">Send push notification (if enabled)</span>
              </label>
            </div>

            <button
              onClick={handleSendAnnouncement}
              disabled={!newAnnouncement.title || !newAnnouncement.content}
              className="w-full px-6 py-3 bg-[#947843] text-white rounded-md font-bold hover:bg-[#DDB672] transition-colors duration-300 border-2 border-[#947843] shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed disabled:border-gray-300"
            >
              Send Announcement
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
