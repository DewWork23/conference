'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* SPARC-Style Black Navigation Bar */}
      <nav className="bg-black fixed top-0 left-0 right-0 z-[100] h-32 flex items-center border-0">
        {/* Mobile layout - menu button + logo */}
        <div className="w-full max-w-7xl mx-auto px-6 md:hidden relative">
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

            {/* Conference Logo/Title */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-[#947843] rounded-full flex items-center justify-center font-bold text-white text-lg">
                  SW
                </div>
                <div>
                  <div className="font-bold text-base tracking-wide text-white">Southeastern Social Work</div>
                  <div className="text-xs text-gray-300">Voices from the Field 2026</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop layout - 3 columns grid */}
        <div className="hidden md:grid w-full max-w-7xl mx-auto px-6 grid-cols-3 items-center">
          {/* Left - Menu Button */}
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
          </div>

          {/* Center - Conference Logo/Title (truly centered) */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-[#947843] rounded-full flex items-center justify-center font-bold text-white text-xl">
                  SW
                </div>
                <div>
                  <div className="font-bold text-lg tracking-wide text-white">Southeastern Social Work</div>
                  <div className="text-xs text-gray-300">Voices from the Field 2026</div>
                </div>
              </div>
            </Link>
          </div>

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
          </ul>
        </div>
      </div>
    </>
  );
}
