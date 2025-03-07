'use client';

import DashboardLayout from '@/components/DashboardLayout';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <h1 className="text-3xl font-bold font-[Clash Display] text-[#621B93] mb-4">
            Tableau de bord
          </h1>
          <p className="text-[#8987A1]">
            Bienvenue dans votre espace administrateur. Gérez vos projets, meetings et plus encore.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Projects Stats */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#621B93]">Projets</h3>
              <span className="text-2xl">📋</span>
            </div>
            <p className="text-3xl font-bold mb-2">12</p>
            <p className="text-[#8987A1] text-sm">Projets en cours</p>
          </div>

          {/* Meetings Stats */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#621B93]">Meetings</h3>
              <span className="text-2xl">📅</span>
            </div>
            <p className="text-3xl font-bold mb-2">5</p>
            <p className="text-[#8987A1] text-sm">Rendez-vous aujourd'hui</p>
          </div>

          {/* Users Stats */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#621B93]">Utilisateurs</h3>
              <span className="text-2xl">👥</span>
            </div>
            <p className="text-3xl font-bold mb-2">256</p>
            <p className="text-[#8987A1] text-sm">Utilisateurs actifs</p>
          </div>

          {/* Revenue Stats */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#621B93]">Revenus</h3>
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-3xl font-bold mb-2">15M</p>
            <p className="text-[#8987A1] text-sm">FCFA ce mois</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <h2 className="text-xl font-bold text-[#621B93] mb-6">Activités récentes</h2>
          <div className="space-y-4">
            {/* Activity Items */}
            <div className="flex items-center gap-4 p-4 hover:bg-[#F1F3F7] rounded-lg transition-colors">
              <div className="w-10 h-10 bg-[#F1F3F7] rounded-full flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <div>
                <p className="font-semibold">Nouveau projet soumis</p>
                <p className="text-[#8987A1] text-sm">Application de gestion pour XYZ Corp</p>
              </div>
              <span className="ml-auto text-[#8987A1] text-sm">Il y a 2h</span>
            </div>

            <div className="flex items-center gap-4 p-4 hover:bg-[#F1F3F7] rounded-lg transition-colors">
              <div className="w-10 h-10 bg-[#F1F3F7] rounded-full flex items-center justify-center">
                <span className="text-xl">📅</span>
              </div>
              <div>
                <p className="font-semibold">Meeting planifié</p>
                <p className="text-[#8987A1] text-sm">Kick-off projet ABC Tech</p>
              </div>
              <span className="ml-auto text-[#8987A1] text-sm">Il y a 5h</span>
            </div>

            <div className="flex items-center gap-4 p-4 hover:bg-[#F1F3F7] rounded-lg transition-colors">
              <div className="w-10 h-10 bg-[#F1F3F7] rounded-full flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <div>
                <p className="font-semibold">Paiement reçu</p>
                <p className="text-[#8987A1] text-sm">2M FCFA - Projet DEF Solutions</p>
              </div>
              <span className="ml-auto text-[#8987A1] text-sm">Il y a 8h</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}