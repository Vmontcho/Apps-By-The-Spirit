'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function UserDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F3F7]">
      {/* Navbar */}
      <nav className="bg-[#621B93] shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/logo-footer.png"
                alt="APPS By Spirit"
                width={120}
                height={40}
                className="block"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/dashboard/user"
                className="text-white hover:bg-[#7B3CAB] px-3 py-2 rounded-md text-sm font-medium"
              >
                Accueil
              </Link>
              <Link
                href="/dashboard/user/projects"
                className="text-white hover:bg-[#7B3CAB] px-3 py-2 rounded-md text-sm font-medium"
              >
                Projets
              </Link>
              <Link
                href="/dashboard/user/meetings"
                className="text-white hover:bg-[#7B3CAB] px-3 py-2 rounded-md text-sm font-medium"
              >
                Meetings
              </Link>
              <Link
                href="/dashboard/user/finances"
                className="text-white hover:bg-[#7B3CAB] px-3 py-2 rounded-md text-sm font-medium"
              >
                Finances
              </Link>
              <Link
                href="/dashboard/user/profile"
                className="text-white hover:bg-[#7B3CAB] px-3 py-2 rounded-md text-sm font-medium"
              >
                Profil
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium ml-4"
              >
                Déconnexion
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#7B3CAB] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#621B93]`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/dashboard/user"
              className="text-white hover:bg-[#7B3CAB] block px-3 py-2 rounded-md text-base font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/dashboard/user/projects"
              className="text-white hover:bg-[#7B3CAB] block px-3 py-2 rounded-md text-base font-medium"
            >
              Projets
            </Link>
            <Link
              href="/dashboard/user/meetings"
              className="text-white hover:bg-[#7B3CAB] block px-3 py-2 rounded-md text-base font-medium"
            >
              Meetings
            </Link>
            <Link
              href="/dashboard/user/finances"
              className="text-white hover:bg-[#7B3CAB] block px-3 py-2 rounded-md text-base font-medium"
            >
              Finances
            </Link>
            <Link
              href="/dashboard/user/profile"
              className="text-white hover:bg-[#7B3CAB] block px-3 py-2 rounded-md text-base font-medium"
            >
              Profil
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left text-white bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md text-base font-medium mt-2"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 p-4 md:p-8">
        {/* Dashboard content will be added here */}
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
}

