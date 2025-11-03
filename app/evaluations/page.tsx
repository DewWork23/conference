'use client';

import { useState } from 'react';
import { sessions, presenters } from '@/lib/mock-data';

export default function EvaluationsPage() {
  const [selectedSession, setSelectedSession] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    relevance: 5,
    clarity: 5,
    knowledge: 5,
    engagement: 5,
    materials: 5,
    overall: 5,
    strengths: '',
    improvements: '',
    recommend: true
  });

  const session = sessions.find(s => s.id === selectedSession);
  const presenter = session ? presenters.find(p => p.id === session.presenterId) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedSession('');
      setFormData({
        relevance: 5,
        clarity: 5,
        knowledge: 5,
        engagement: 5,
        materials: 5,
        overall: 5,
        strengths: '',
        improvements: '',
        recommend: true
      });
    }, 3000);
  };

  const RatingScale = ({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map(rating => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={`w-12 h-12 rounded-full font-bold transition-colors ${
              value >= rating
                ? 'bg-[#947843] text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {rating}
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {value === 1 ? 'Poor' : value === 2 ? 'Fair' : value === 3 ? 'Good' : value === 4 ? 'Very Good' : 'Excellent'}
        </span>
      </div>
    </div>
  );

  // Generate mock QR code URL for a session
  const getQRCodeUrl = (sessionId: string) => {
    const evalUrl = `https://conference.uncp.edu/eval/${sessionId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(evalUrl)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-black text-[#947843] leading-tight tracking-tight mb-2">Session Evaluations</h1>
        <p className="text-xl text-[#3E5C73] font-semibold tracking-wide">Help us improve future conferences with your feedback</p>
      </div>

      {!selectedSession ? (
        <div>
          <div className="bg-gray-50 border-l-4 border-[#947843] p-4 mb-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#947843] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-[#3E5C73] tracking-wide mb-1">Complete evaluations to receive CEU credits</h3>
                <p className="text-sm text-gray-700">
                  You must complete an evaluation for each session you attend. Scan the QR code in each room or select a session below.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#947843] tracking-wide mb-4">Select a Session to Evaluate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessions.map(s => {
              const p = presenters.find(pr => pr.id === s.presenterId);
              return (
                <div key={s.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#947843] hover:border-[#3E5C73]">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#3E5C73] tracking-wide mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{p?.name}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-[#947843] text-white px-2 py-1 rounded font-semibold">
                          {s.track}
                        </span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {s.startTime}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <img
                        src={getQRCodeUrl(s.id)}
                        alt="QR Code"
                        className="w-16 h-16 border-2 border-[#947843] rounded"
                        title={`Scan to evaluate: ${s.title}`}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSession(s.id)}
                    className="w-full mt-3 px-4 py-2 bg-[#947843] text-white rounded-md font-bold hover:bg-[#DDB672] transition-colors duration-300 border-2 border-[#947843] shadow-lg"
                  >
                    Evaluate Session
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : submitted ? (
        <div className="bg-white p-12 rounded-lg shadow-md text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#947843] tracking-wide mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">Your evaluation has been submitted successfully.</p>
          <p className="text-sm text-gray-500">
            Your feedback helps presenters improve and assists us in planning future conferences.
          </p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="mb-6 pb-6 border-b">
            <h2 className="text-2xl font-bold text-[#947843] tracking-wide mb-2">{session?.title}</h2>
            <p className="text-gray-600">{presenter?.name} • {presenter?.affiliation}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-[#947843] text-white px-2 py-1 rounded font-semibold">
                {session?.track}
              </span>
              <span className="text-xs bg-[#3E5C73] text-white px-2 py-1 rounded font-semibold">
                {session?.topic}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <RatingScale
                label="Relevance to practice: How relevant was this content to your work?"
                value={formData.relevance}
                onChange={(v) => setFormData({ ...formData, relevance: v })}
              />

              <RatingScale
                label="Clarity of presentation: How clearly was the content delivered?"
                value={formData.clarity}
                onChange={(v) => setFormData({ ...formData, clarity: v })}
              />

              <RatingScale
                label="Presenter knowledge: How knowledgeable was the presenter on this topic?"
                value={formData.knowledge}
                onChange={(v) => setFormData({ ...formData, knowledge: v })}
              />

              <RatingScale
                label="Engagement: How engaging was the presentation?"
                value={formData.engagement}
                onChange={(v) => setFormData({ ...formData, engagement: v })}
              />

              <RatingScale
                label="Materials & resources: Quality of handouts and supplementary materials"
                value={formData.materials}
                onChange={(v) => setFormData({ ...formData, materials: v })}
              />

              <RatingScale
                label="Overall session quality"
                value={formData.overall}
                onChange={(v) => setFormData({ ...formData, overall: v })}
              />
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What were the strengths of this session?
                </label>
                <textarea
                  rows={4}
                  value={formData.strengths}
                  onChange={(e) => setFormData({ ...formData, strengths: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#947843] focus:border-transparent"
                  placeholder="What did you find most valuable or effective?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What could be improved?
                </label>
                <textarea
                  rows={4}
                  value={formData.improvements}
                  onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#947843] focus:border-transparent"
                  placeholder="Suggestions for improvement"
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.recommend}
                    onChange={(e) => setFormData({ ...formData, recommend: e.target.checked })}
                    className="w-4 h-4 text-[#947843] border-gray-300 rounded focus:ring-[#947843]"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I would recommend this session to colleagues
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[#947843] text-white rounded-md font-bold hover:bg-[#DDB672] transition-colors duration-300 border-2 border-[#947843] shadow-lg"
              >
                Submit Evaluation
              </button>
              <button
                type="button"
                onClick={() => setSelectedSession('')}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
