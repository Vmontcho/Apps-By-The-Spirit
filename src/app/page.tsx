import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F3F7]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="/logo-nav.png"
            alt="APPS By Spirit"
            width={120}
            height={40}
            priority
          />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#8987A1] hover:text-[#621B93]">Accueil</a>
            <a href="#" className="text-[#8987A1] hover:text-[#621B93]">Avantages</a>
            <a href="#" className="text-[#8987A1] hover:text-[#621B93]">Tarifs</a>
            <a href="#" className="text-[#8987A1] hover:text-[#621B93]">FAQ</a>
          </nav>
          <button className="bg-[#621B93] text-white px-6 py-2 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg">
            Se connecter
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/logo-large.png"
              alt="APPS By Spirit"
              width={200}
              height={80}
              className="mx-auto mb-8"
            />
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block">🚀</span>
              <p className="text-[#621B93] font-semibold">Besoin d&apos;une application rapidement ?</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-[Clash Display]">Nous créons votre Application<br />en 30 jours</h1>
            <button className="bg-[#621B93] text-white px-8 py-3 rounded-full text-lg font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg">
              Je veux mon App →
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video relative">
              <iframe
                src="https://www.youtube.com/embed/s0IEmNjJqvI"
                title="APPS By Spirit Presentation"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#621B93] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[Clash Display]">Nous vous aidons à<br />RÉALISER VOS PROJETS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile + Web App Card */}
            <div className="bg-white p-8 rounded-3xl text-black">
              <div className="mb-6">
                <Image src="/mobile-icon.png" alt="Mobile" width={56} height={56} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application<br />Mobile + Web</h3>
              <p className="text-[#8987A1] mb-6">1 application mobile et un tableau de bord administrateur</p>
              <div className="flex gap-4">
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/flutter.png" alt="Flutter" width={24} height={24} />
                <Image src="/ios.png" alt="iOS" width={24} height={24} />
                <Image src="/android.png" alt="Android" width={24} height={24} />
              </div>
            </div>

            {/* Responsive Web App Card */}
            <div className="bg-white p-8 rounded-3xl text-black">
              <div className="mb-6">
                <Image src="/web-icon.png" alt="Web" width={56} height={56} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application<br />Web responsive</h3>
              <p className="text-[#8987A1] mb-6">Site web responsive avec tableau de bord administrateur</p>
              <div className="flex gap-4">
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/next-js.png" alt="Next.js" width={24} height={24} />
                <Image src="/vue.png" alt="Vue.js" width={24} height={24} />
              </div>
            </div>

            {/* Multi Apps System Card */}
            <div className="bg-white p-8 rounded-3xl text-black">
              <div className="mb-6">
                <Image src="/window-web.png" alt="System" width={56} height={56} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Systèmes<br />Multi Apps</h3>
              <p className="text-[#8987A1] mb-6">Système complet avec plusieurs applications interconnectées</p>
              <div className="flex gap-4">
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/flutter.png" alt="Flutter" width={24} height={24} />
                <Image src="/next-js.png" alt="Next.js" width={24} height={24} />
                <Image src="/vue.png" alt="Vue.js" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Avec intégration</h3>
          <div className="flex justify-center items-center gap-4 mb-2">
            <span className="bg-[#621B93] text-white px-4 py-2 rounded-full">d&apos;outils IA</span>
            <Image src="/ai-icons.png" alt="AI Tools" width={136} height={40} />
          </div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="bg-[#621B93] text-white px-4 py-2 rounded-full">et des agents personnalisés</span>
            <div className="flex gap-2">
              <Image src="/bot-icons.png" alt="Bot Icons" width={136} height={40} />
            </div>
          </div>
          <p className="text-[#8987A1]">et autres automatisations...</p>
        </div>
      </section>

      {/* 5 Steps Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">Votre App est prête</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">en 5 étapes clés</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Step 1 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step1.png" alt="Demande" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Demande<br />et Kick Off</h4>
              <p className="text-[#8987A1]">Soumettez votre demande et réservez un call pour finaliser le cahier de charges.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step2.png" alt="Design" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Design prototype<br />(UX et MVP)</h4>
              <p className="text-[#8987A1]">Nous réalisons le design UX et/ou MVP de votre projet que vous pourrez essayer pendant 10 jours.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step3.png" alt="Développement" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Développement<br />de l&apos;application</h4>
              <p className="text-[#8987A1]">Nous développons ensuite les interfaces et fonctionnalités de votre application.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Step 4 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step4.png" alt="Test" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Test et Déploiement</h4>
              <p className="text-[#8987A1]">Avec la priorité à la qualité, nous testons rigoureusement chaque aspect de votre application. Une fois validée, nous la déployons pour une utilisation fluide et sans tracas pour vos utilisateurs.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/step5.png" alt="Maintenance" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Maintenance et prise en main</h4>
              <p className="text-[#8987A1]">Nous assurons la maintenance pendant 10 jours gratuitement, une fois déployée : nous garantissons que votre application fonctionnera au pic de sa forme, sans bugs, selon le scope du projet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F1F3F7]">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#621B93] font-[Clash Display]">5 bonnes raisons</h2>
          <h3 className="text-2xl font-bold mb-12">de nous faire confiance</h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit1.png" alt="Design UX pro" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Design<br />UX pro</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit2.png" alt="Solution optimisée" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Solution<br />optimisée</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit3.png" alt="Livraison rapide" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Livraison<br />rapide</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit4.png" alt="Tarif compétitif" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Tarif<br />compétitif</p>
            </div>

            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
              <Image src="/benefit5.png" alt="Espace client personnalisé" width={64} height={64} className="mb-4" />
              <p className="font-semibold">Espace client<br />personnalisé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display]">Et un</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#621B93] font-[Clash Display]">Paiement flexible</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h4 className="text-4xl md:text-6xl font-bold text-[#621B93] mb-4">50%</h4>
              <p className="text-[#8987A1]">À l'avance</p>
            </div>
            
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h4 className="text-4xl md:text-6xl font-bold text-[#621B93] mb-4">30%</h4>
              <p className="text-[#8987A1]">À la livraison</p>
            </div>
            
            <div className="bg-[#ffffff] p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h4 className="text-4xl md:text-6xl font-bold text-[#621B93] mb-4">20%</h4>
              <p className="text-[#8987A1]">À la maintenance</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-left bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[Clash Display] text-center">Votre App en 30 Jours</h2>
            <p className="text-[#8987A1] text-center mb-6">Une proposition de valeur unique, compétitive et premium</p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">💰</span>
              <h3 className="text-2xl font-bold">À partir de 1 Million FCFA</h3>
            </div>
            <p className="text-[#8987A1] text-center mb-8">Environ 1500 $ ou 1500 Euro</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Hébergement & domaine gratuits (selon App)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Formation de prise en main & documentation incluses</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Application Testée & optimisée avant livraison</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>2 semaines de maintenances post déploiement gratuite</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Maintenance additionnelle ou continu (+20-30%)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Fonctionnalités additionnelles ou avancées (sur devis)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Code source fournis au solde</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Design UX/UI pro, option premium (+30%)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Équipe dédiée (6j/7) sur demande (+50%)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Systèmes multi-applications web/mobile (sur devis)</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full bg-[#621B93] text-white px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">✨</span>
                Soumettre une demande
              </button>
              <button className="w-full bg-[#F1F3F7] text-[#621B93] px-6 py-3 rounded-full font-[Clash Display] transition-transform hover:scale-105 hover:shadow-lg">
                Réserver un appel vidéo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
