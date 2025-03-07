'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-[#F1F3F7] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <div className="text-center">
          <Image
            src="/logo-large.png"
            alt="APPS By Spirit"
            width={160}
            height={64}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold font-[Clash Display] text-[#621B93]">
            {isSignIn ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="mt-2 text-sm text-[#8987A1]">
            {isSignIn ? 'Accédez à votre espace client' : 'Rejoignez-nous pour démarrer votre projet'}
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {!isSignIn && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#621B93]"
                placeholder="John Doe"
              />
            </div>
          )}

          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de compte
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="particular"
                    className="w-4 h-4 text-[#621B93] border-gray-300 focus:ring-[#621B93]"
                    defaultChecked
                  />
                  <span className="text-gray-700">Particulier</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="enterprise"
                    className="w-4 h-4 text-[#621B93] border-gray-300 focus:ring-[#621B93]"
                  />
                  <span className="text-gray-700">Entreprise</span>
                </label>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#621B93]"
              placeholder="exemple@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#621B93]"
              placeholder="••••••••"
            />
          </div>

          {!isSignIn && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#621B93]"
                placeholder="••••••••"
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg"
            >
              {isSignIn ? 'Se connecter' : 'Créer un compte'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-[#621B93] text-sm hover:underline"
          >
            {isSignIn ? 'Pas encore de compte ? Créez-en un' : 'Déjà un compte ? Connectez-vous'}
          </button>
        </div>
        <div className="text-center mt-8">
          <p className="text-[#8987A1] text-sm">
            © Copyright, APPS By The Spirit, Private Property, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}