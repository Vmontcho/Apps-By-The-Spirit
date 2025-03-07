'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Accueil', icon: '🏠', href: '/dashboard' },
    { name: 'Requêtes projets', icon: '📋', href: '/dashboard/projects' },
    { name: 'Meetings', icon: '📅', href: '/dashboard/meetings' },
    { name: 'Finances', icon: '💰', href: '/dashboard/finances' },
    { name: 'Statistiques', icon: '📊', href: '/dashboard/statistics' },
    { name: 'Utilisateurs', icon: '👥', href: '/dashboard/users' },
    { name: 'Paramètres', icon: '⚙️', href: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#F1F3F7] flex">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white fixed h-full transition-all duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="p-4 flex justify-between items-center">
          {isSidebarOpen ? (
            <Image
              src="/logo-large.png"
              alt="APPS By Spirit"
              width={120}
              height={48}
              className="mx-auto"
            />
          ) : (
            <Image
              src="/logo-nav.png"
              alt="APPS By Spirit"
              width={40}
              height={40}
              className="mx-auto"
            />
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[#8987A1] hover:text-[#621B93] transition-colors"
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 text-[#8987A1] hover:bg-[#F1F3F7] hover:text-[#621B93] transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  {isSidebarOpen && (
                    <span className="ml-3">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <button
            className={`${isSidebarOpen ? 'w-full' : 'w-12 h-12'} bg-[#621B93] text-white rounded-full font-[Clash Display] transition-all hover:opacity-90 flex items-center justify-center`}
          >
            {isSidebarOpen ? (
              'Déconnexion'
            ) : (
              <span className="text-xl">🚪</span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 ease-in-out p-8`}>
        {children}
      </main>
    </div>
  );
}