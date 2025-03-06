import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F3F7]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="/logo.png"
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
          <button className="bg-[#621B93] text-white px-6 py-2 rounded-full hover:opacity-90">
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
            <button className="bg-[#621B93] text-white px-8 py-3 rounded-full text-lg hover:opacity-90">
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
                <Image src="/window.png" alt="System" width={56} height={56} />
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
            <span className="bg-[#621B93] text-white px-4 py-2 rounded-full">d'outils IA</span>
            <Image src="/ai-icons.png" alt="AI Tools" width={136} height={40} />
          </div>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="bg-[#621B93] text-white px-4 py-2 rounded-full">et des agants personnalisés</span>
            <div className="flex gap-2">
              <Image src="/bot-icons.png" alt="Bot Icons" width={136} height={40} />
            </div>
          </div>
          <p className="text-[#8987A1]">et autres automatisations...</p>
        </div>
      </section>
    </div>
  );
}
