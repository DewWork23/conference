'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/presenter', label: 'Presenters' },
    { href: '/evaluations', label: 'Evaluations' },
    { href: '/announcements', label: 'Announcements' },
    { href: '/ceu', label: 'CEU Tracking' },
    { href: '/networking', label: 'Network' },
    { href: '/admin', label: 'Admin' },
  ];

  return (
    <nav className="bg-[#3E5C73] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#947843]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#947843] rounded-full flex items-center justify-center font-bold text-white">
              SW
            </div>
            <div>
              <div className="font-bold text-lg tracking-wide">Southeastern Social Work</div>
              <div className="text-xs text-gray-200">Voices from the Field 2026</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 border-2 ${
                  pathname === link.href
                    ? 'bg-[#947843] text-white border-[#947843]'
                    : 'text-white border-transparent hover:border-[#DDB672] hover:bg-[#947843]/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 border-2 ${
                  pathname === link.href
                    ? 'bg-[#947843] text-white border-[#947843]'
                    : 'text-white border-transparent hover:border-[#DDB672] hover:bg-[#947843]/20'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
