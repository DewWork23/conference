export default function NavigationFeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-[#947843]">Conference Navigation Features - Planning Document</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <p className="text-gray-600 mb-4">
          <strong>Purpose:</strong> This document outlines potential navigation features to help conference attendees
          and presenters find their way around the venue.
        </p>
      </div>

      {/* Building Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#947843]">1. Building-to-Building Navigation</h2>

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

      {/* GPS Parking */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-[#947843]">2. GPS Coordinates for Parking</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
          <p className="text-gray-700 mb-2">
            Some parking locations (especially presenter parking) cannot be found reliably using building addresses
            in GPS systems. Navigation apps may route people to the wrong entrance or general campus area.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Proposed Solution</h3>
          <p className="text-gray-700 mb-4">
            Provide exact GPS coordinates (latitude/longitude) for specific parking areas that can be entered
            directly into any navigation app.
          </p>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#3E5C73] mb-2">Implementation Options</h4>

            <p className="font-semibold mb-2">Option A: Parking Information Page (/parking or /directions)</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
              <li>List different parking areas with categories:
                <ul className="list-circle ml-6 mt-1">
                  <li>Presenter Parking</li>
                  <li>General Attendee Parking</li>
                  <li>Accessible Parking</li>
                  <li>Overflow Parking</li>
                </ul>
              </li>
              <li>For each parking area, provide:
                <ul className="list-circle ml-6 mt-1">
                  <li>Name and description</li>
                  <li>Exact GPS coordinates (latitude, longitude)</li>
                  <li>One-click "Navigate Here" buttons for Google Maps and Apple Maps</li>
                  <li>Optional: What3Words address for even more precision</li>
                  <li>Visual photo or map snippet</li>
                  <li>Walking time/route to main buildings</li>
                </ul>
              </li>
            </ul>

            <p className="font-semibold mb-2">Option B: Integration Points</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Add parking info to presenter portal (/presenter page)</li>
              <li>Include GPS coordinates in email confirmations</li>
              <li>Add to general /directions page for all attendees</li>
              <li>QR codes that open navigation directly</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">How It Works</h3>
          <p className="text-gray-700 mb-4">
            Direct map links using GPS coordinates work with all major navigation apps:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
            <div>
              <strong>Google Maps:</strong> https://www.google.com/maps?q=34.1234,-79.5678
            </div>
            <div>
              <strong>Apple Maps:</strong> https://maps.apple.com/?q=34.1234,-79.5678
            </div>
            <div>
              <strong>Waze:</strong> https://waze.com/ul?ll=34.1234,-79.5678
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Example Display</h3>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#947843]">
            <h4 className="font-bold text-lg mb-2">Presenter Parking Lot</h4>
            <p className="text-gray-700 mb-3">📍 34.1234, -79.5678</p>
            <div className="flex gap-3 mb-3">
              <button className="bg-[#947843] text-white px-4 py-2 rounded-lg font-semibold">
                Navigate in Google Maps
              </button>
              <button className="bg-[#3E5C73] text-white px-4 py-2 rounded-lg font-semibold">
                Navigate in Apple Maps
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold">
                Copy Coordinates
              </button>
            </div>
            <p className="text-sm text-gray-600 italic">
              Note: Use these exact coordinates - the building address may route you to the wrong entrance
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">What's Needed to Implement</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Actual GPS coordinates for each parking area (can get from Google Maps)</li>
            <li>Optional: Photos of each parking lot entrance</li>
            <li>Walking directions/times from each lot to buildings</li>
            <li>Any special instructions (e.g., "Look for signs marked 'Conference Parking'")</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold mb-2">Implementation Effort</h3>
          <p className="text-gray-700">
            <strong>Low to Medium effort</strong> - Mainly data collection (getting coordinates) and creating a simple page with links.
            The map links themselves are very straightforward to implement.
          </p>
        </div>
      </div>

      {/* Summary */}
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

      <div className="bg-[#DDB672] text-black rounded-lg p-6 mt-8">
        <p className="text-center">
          <strong>Note:</strong> This is a planning document. Features outlined here are not yet implemented.
          This page can be shared with stakeholders to discuss which features to prioritize.
        </p>
      </div>
    </div>
  );
}
