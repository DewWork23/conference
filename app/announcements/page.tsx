'use client';

import { announcements } from '@/lib/mock-data';

export default function AnnouncementsPage() {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const minutes = Math.floor(diff / (1000 * 60));
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'normal':
        return 'border-blue-500 bg-blue-50';
      case 'low':
        return 'border-gray-500 bg-gray-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'normal':
        return (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'low':
        return (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-medium">Important</span>;
      case 'normal':
        return <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full font-medium">Info</span>;
      case 'low':
        return <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full font-medium">Note</span>;
      default:
        return null;
    }
  };

  const sortedAnnouncements = [...announcements].sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">Conference Announcements</h1>
        <p className="text-gray-600">Stay updated with the latest news and important information</p>
      </div>

      {/* Notification Bell Summary */}
      <div className="bg-gradient-to-r from-[#000000] to-[#0A2F5F] text-white rounded-lg p-6 mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center mr-4">
              <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Latest Updates</h2>
              <p className="text-sm text-gray-300">{announcements.length} announcements • Last updated: {formatTimestamp(sortedAnnouncements[0].timestamp)}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{announcements.filter(a => a.priority === 'high').length}</div>
            <div className="text-sm text-gray-300">Important</div>
          </div>
        </div>
      </div>

      {/* Announcements Timeline */}
      <div className="space-y-4">
        {sortedAnnouncements.map((announcement, index) => (
          <div
            key={announcement.id}
            className={`border-l-4 ${getPriorityColor(announcement.priority)} rounded-lg shadow-md hover:shadow-lg transition-shadow`}
          >
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {getPriorityIcon(announcement.priority)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-black">{announcement.title}</h3>
                    {getPriorityLabel(announcement.priority)}
                  </div>
                  <p className="text-gray-700 mb-3">{announcement.content}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Posted {formatTimestamp(announcement.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mock notification settings */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-black mb-4">Notification Preferences</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-[#000000]"
            />
            <span className="ml-3 text-gray-700">Email notifications for important announcements</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-[#000000]"
            />
            <span className="ml-3 text-gray-700">Push notifications for schedule changes</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-[#000000]"
            />
            <span className="ml-3 text-gray-700">Daily digest of all announcements</span>
          </label>
        </div>
        <button className="mt-4 px-6 py-2 bg-[#000000] text-white rounded-md hover:bg-[#0A2F5F] transition-colors">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
