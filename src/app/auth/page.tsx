'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signInUser } from '@/lib/firebase';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AuthPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (isSignUp) {
      const name = formData.get('name') as string;
      const contact = formData.get('contact') as string;

      try {
        // Check if user already exists in Firestore
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          throw new Error('Un utilisateur avec cet email existe déjà');
        }

        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create user in Firestore
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name,
          email,
          contact,
          role: 'user',
          accountType: 'particular',
          status: 'active',
          lastLogin: new Date().toISOString(),
          createdAt: new Date().toISOString()
        });

        window.location.href = '/';
      } catch (err: any) {
        console.error('Error creating user:', err);
        if (err.code === 'auth/email-already-in-use') {
          setError('Un utilisateur avec cet email existe déjà');
        } else {
          setError(err.message || 'Une erreur est survenue lors de la création du compte');
        }
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const user = await signInUser(email, password);
        if (user) {
          // Check user role in Firestore
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('email', '==', email));
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            // All users are redirected to home page
            window.location.href = '/';
          }
        }
      } catch (err: any) {
        setError(err.message || 'Une erreur est survenue lors de la connexion');
      } finally {
        setLoading(false);
      }
    }
  };

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
            {isSignUp ? 'Créer un compte' : 'Connexion'}
          </h2>
          <p className="mt-2 text-sm text-[#8987A1]">
            {isSignUp ? 'Créez votre compte client' : 'Accédez à votre espace client'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {isSignUp && (
            <>
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

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#621B93]"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </>
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

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Chargement...' : (isSignUp ? 'Créer un compte' : 'Se connecter')}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#621B93] hover:underline text-sm"
            >
              {isSignUp ? 'Déjà un compte ? Connectez-vous' : 'Pas de compte ? Créez-en un'}
            </button>
          </div>
        </form>

        <div className="text-center mt-8">
          <p className="text-[#8987A1] text-sm">
            © Copyright, APPS By The Spirit, Private Property, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}