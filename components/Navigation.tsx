'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// Base path for production (GitHub Pages)
const basePath = process.env.NODE_ENV === 'production' ? '/conference' : '';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickInsideSearch = searchRef.current && searchRef.current.contains(event.target as Node);
      const isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(event.target as Node);

      if (!isClickInsideSearch && !isClickInsideDropdown) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search when navigating to a new page
  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery('');
    setShowResults(false);
  }, [pathname]);

  // Define searchable pages
  const pages = [
    { name: 'Home', path: '/', keywords: ['home', 'main', 'start'] },
    { name: 'Schedule', path: '/schedule', keywords: ['schedule', 'sessions', 'program', 'agenda'] },
    { name: 'Presenters', path: '/presenter', keywords: ['presenters', 'speakers', 'faculty'] },
    { name: 'Evaluations', path: '/evaluations', keywords: ['evaluations', 'feedback', 'ratings'] },
    { name: 'Announcements', path: '/announcements', keywords: ['announcements', 'news', 'updates'] },
    { name: 'CEU Tracking', path: '/ceu', keywords: ['ceu', 'credits', 'continuing education'] },
    { name: 'Network', path: '/networking', keywords: ['network', 'attendees', 'connect'] },
    { name: 'Admin', path: '/admin', keywords: ['admin', 'dashboard', 'management'] },
    { name: 'Directions', path: '/navigation-features', keywords: ['directions', 'navigation', 'features', 'planning', 'buildings', 'parking', 'gps'] },
  ];

  // Search logic
  const getSearchResults = () => {
    if (!searchQuery.trim()) return { pages: [] };

    const query = searchQuery.toLowerCase();

    // Search pages
    const matchingPages = pages
      .filter(page =>
        page.name.toLowerCase().includes(query) ||
        page.keywords.some(keyword => keyword.includes(query))
      )
      .slice(0, 8);

    return { pages: matchingPages };
  };

  const searchResults = getSearchResults();
  const hasResults = searchResults.pages.length > 0;

  const handleResultClick = (path: string) => {
    router.push(path);
    setSearchOpen(false);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowResults(value.trim().length > 0);
  };

  return (
    <>
      {/* SPARC-Style Black Navigation Bar */}
      <nav className="bg-black fixed top-0 left-0 right-0 z-[100] h-32 flex items-center border-0">
        {/* Mobile layout - menu button + search + logo */}
        <div className="w-full max-w-7xl mx-auto px-6 md:hidden relative">
          {!searchOpen ? (
            <div className="flex items-center gap-4">
              {/* Left - Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-[#DDB672] text-black px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#947843] hover:text-white transition-colors"
                aria-expanded={menuOpen}
              >
                <span className="font-bold">Menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="bg-black text-white p-2.5 rounded-full border-2 border-[#DDB672] hover:bg-[#DDB672] hover:text-black transition-colors flex items-center justify-center"
                aria-label="Open search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M11.375 19.5C15.8623 19.5 19.5 15.8623 19.5 11.375C19.5 6.88769 15.8623 3.25 11.375 3.25C6.88769 3.25 3.25 6.88769 3.25 11.375C3.25 15.8623 6.88769 19.5 11.375 19.5Z" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M22.7498 22.75L17.1191 17.1194" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </button>

              {/* Conference Logo */}
              <Link href="/">
                <img
                  src={`${basePath}/Primary_Horizontal_wg_RGB.png`}
                  alt="UNC Pembroke Logo"
                  className="h-28 w-auto"
                />
              </Link>
            </div>
          ) : (
            <div ref={searchRef} className="absolute inset-0 flex items-center bg-black px-6 z-50">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="flex-1 px-4 py-2 border-b-2 border-white bg-black text-white placeholder-gray-400 focus:outline-none text-sm"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                  setShowResults(false);
                }}
                className="text-white hover:text-[#DDB672] transition-colors p-2 ml-2"
                aria-label="Close search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Search Results Dropdown - Mobile */}
          {searchOpen && showResults && (
            <div ref={dropdownRef} className="absolute top-full left-0 right-0 mt-2 mx-6 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[70vh] overflow-y-auto z-[110]">
              {!hasResults && (
                <div className="p-4 text-gray-500 text-center">
                  No results found for "{searchQuery}"
                </div>
              )}

              {/* Pages */}
              {searchResults.pages.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">Pages</div>
                  {searchResults.pages.map((page) => (
                    <button
                      key={page.path}
                      onClick={() => handleResultClick(page.path)}
                      className="w-full text-left px-4 py-3 hover:bg-[#DDB672]/10 transition-colors border-b border-gray-50 last:border-0"
                    >
                      <div className="font-medium text-gray-900">{page.name}</div>
                      <div className="text-xs text-gray-500">{page.path}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop layout - 3 columns grid */}
        <div className="hidden md:grid w-full max-w-7xl mx-auto px-6 grid-cols-3 items-center">
          {/* Left - Menu Button and Search */}
          <div className="flex justify-start items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-[#DDB672] text-black px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#947843] hover:text-white transition-colors"
              aria-expanded={menuOpen}
            >
              <span className="font-bold">Menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search - Button or Input */}
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="bg-black text-white p-2.5 rounded-full border-2 border-[#DDB672] hover:bg-[#DDB672] hover:text-black transition-colors flex items-center justify-center"
                aria-label="Open search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M11.375 19.5C15.8623 19.5 19.5 15.8623 19.5 11.375C19.5 6.88769 15.8623 3.25 11.375 3.25C6.88769 3.25 3.25 6.88769 3.25 11.375C3.25 15.8623 6.88769 19.5 11.375 19.5Z" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M22.7498 22.75L17.1191 17.1194" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </button>
            ) : (
              <div ref={searchRef} className="flex items-center gap-2 flex-1 relative">
                <input
                  type="text"
                  placeholder=""
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="flex-1 px-4 py-2 border-b-2 border-white bg-black text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                    setShowResults(false);
                  }}
                  className="text-white hover:text-[#DDB672] transition-colors p-2"
                  aria-label="Close search"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Search Results Dropdown - Desktop */}
                {showResults && (
                  <div ref={dropdownRef} className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[70vh] overflow-y-auto z-[110]">
                    {!hasResults && (
                      <div className="p-4 text-gray-500 text-center">
                        No results found for "{searchQuery}"
                      </div>
                    )}

                    {/* Pages */}
                    {searchResults.pages.length > 0 && (
                      <div>
                        <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">Pages</div>
                        {searchResults.pages.map((page) => (
                          <button
                            key={page.path}
                            onClick={() => handleResultClick(page.path)}
                            className="w-full text-left px-4 py-3 hover:bg-[#DDB672]/10 transition-colors border-b border-gray-50 last:border-0"
                          >
                            <div className="font-medium text-gray-900">{page.name}</div>
                            <div className="text-xs text-gray-500">{page.path}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Center - Conference Logo (truly centered) */}
          {!searchOpen && (
            <div className="flex justify-center">
              <Link href="/">
                <img
                  src={`${basePath}/Primary_Horizontal_wg_RGB.png`}
                  alt="UNC Pembroke Logo"
                  className="h-32 w-auto"
                />
              </Link>
            </div>
          )}

          {/* Right - Navigation Links */}
          <div className="flex justify-end">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className={`text-white font-bold text-base hover:text-[#DDB672] transition-colors tracking-wide ${
                  isActive('/') ? 'text-[#DDB672]' : ''
                }`}
              >
                HOME
              </Link>
              <Link
                href="/schedule"
                className={`text-white font-bold text-base hover:text-[#DDB672] transition-colors tracking-wide ${
                  isActive('/schedule') ? 'text-[#DDB672]' : ''
                }`}
              >
                SCHEDULE
              </Link>
              <Link
                href="/networking"
                className={`text-white font-bold text-base hover:text-[#DDB672] transition-colors tracking-wide ${
                  isActive('/networking') ? 'text-[#DDB672]' : ''
                }`}
              >
                NETWORK
              </Link>
              <Link
                href="/navigation-features"
                className={`text-white font-bold text-base hover:text-[#DDB672] transition-colors tracking-wide ${
                  isActive('/navigation-features') ? 'text-[#DDB672]' : ''
                }`}
              >
                DIRECTIONS
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[98] transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[99] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Menu Header with Close Button */}
          <div className="bg-white px-6 py-6 border-b-4 border-[#947843]">
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-[#DDB672] text-black px-6 py-2.5 rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#947843] hover:text-white transition-colors"
            >
              <span>Menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="py-6">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/presenter"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Presenters
              </Link>
            </li>
            <li>
              <Link
                href="/evaluations"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Evaluations
              </Link>
            </li>
            <li>
              <Link
                href="/announcements"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Announcements
              </Link>
            </li>
            <li>
              <Link
                href="/ceu"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                CEU Tracking
              </Link>
            </li>
            <li>
              <Link
                href="/networking"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Network
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                href="/navigation-features"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-bold text-lg text-black hover:bg-[#DDB672]/20 border-l-4 border-transparent hover:border-[#947843] transition-all"
              >
                Directions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
