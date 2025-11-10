export default function NavigationFeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#947843]">Directions & Parking</h1>

      {/* GPS Parking - Moved to top */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#947843]">Conference Parking</h2>

        {/* Quick Navigation Link */}
        <div className="bg-[#947843] text-white rounded-lg p-6 mb-6 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=MRQ2%2B862,+Pembroke,+NC+28372"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#947843] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Navigate to Conference Parking
          </a>
          <p className="text-sm mt-3 text-white/90">
            Click to open Google Maps with directions to the conference parking area
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">About Conference Parking</h3>
          <p className="text-gray-700 mb-2">
            Use the button above to navigate directly to the conference parking area. GPS coordinates ensure you arrive at the correct entrance on campus.
          </p>
        </div>
      </div>

      {/* Building Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#947843]">Building-to-Building Navigation</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
          <p className="text-gray-700 mb-2">
            The conference uses 2 adjacent buildings, each with 2-3 floors. Attendees need help with:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li><strong>Problem 1:</strong> Knowing which building their session is in</li>
            <li><strong>Problem 2:</strong> Navigating hallways and floors once inside</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Proposed Solutions</h3>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#3E5C73] mb-2">Option 1: Enhanced Schedule with Building Navigation (Recommended)</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Show building/room info prominently on every session card</li>
              <li>Color-code sessions by building (e.g., Building A = gold, Building B = blue)</li>
              <li>Display transition alerts when consecutive sessions are in different buildings</li>
              <li>Example: "⚠️ Next session is in Building B (3 min walk)"</li>
              <li>Add "Where am I going next?" helper widget</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#3E5C73] mb-2">Option 2: Full Navigation System</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Everything from Option 1, PLUS:</li>
              <li>Interactive floor plans for each building</li>
              <li>"I'm here, take me there" room finder tool</li>
              <li>Building overview with photos and descriptions</li>
              <li>Accessibility information (elevators, ramps, accessible restrooms)</li>
              <li>Key landmarks guide (main entrance, stairs, elevators, restrooms)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#3E5C73] mb-2">Option 3: Minimal Quick Start</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Create a simple /buildings page with:</li>
              <li>Photos and names of both buildings</li>
              <li>Basic floor layouts/diagrams</li>
              <li>Directions from parking lot to each building</li>
              <li>Room numbering guide (e.g., "2xx = 2nd floor")</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Key Features for Indoor Navigation</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Simple floor plans for each building (can be basic diagrams)</li>
            <li>Room numbering system explanation</li>
            <li>Key landmarks: main entrance, elevators, restrooms, stairs</li>
            <li>Simple text directions like: "Enter from parking lot → Main stairs → 2nd floor → Turn right"</li>
            <li>Building transition times (walking estimates between buildings)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Implementation Effort</h3>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Option 1:</strong> Medium effort - integrates with existing schedule</li>
            <li><strong>Option 2:</strong> High effort - requires floor plan creation and interactive components</li>
            <li><strong>Option 3:</strong> Low effort - static page with basic info</li>
          </ul>
        </div>
      </div>

      {/* Planning Information */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-[#947843]">Implementation Recommendation</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Phase 1 (Quick Wins)</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Add GPS parking coordinates page - helps presenters and attendees immediately</li>
            <li>Add building/room info to schedule sessions - minimal effort, high impact</li>
            <li>Create basic buildings overview page with photos and floor numbers</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Phase 2 (Enhanced Features)</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Color-code sessions by building in schedule</li>
            <li>Add building transition alerts</li>
            <li>Create simple floor plan diagrams</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Phase 3 (Advanced - Optional)</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Interactive floor plans</li>
            <li>"I'm here, take me there" room finder</li>
            <li>QR codes throughout venue for instant navigation</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-700 rounded-lg p-6 mt-8">
        <p className="text-center text-sm">
          <strong>Note:</strong> The sections below outline potential future navigation features that are currently in the planning phase.
        </p>
      </div>
    </div>
  );
}
