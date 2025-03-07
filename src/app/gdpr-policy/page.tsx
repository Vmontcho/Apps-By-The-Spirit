import Image from "next/image";

export default function GDPRPolicy() {
  return (
    <div className="min-h-screen bg-[#F1F3F7] py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo-nav.png"
            alt="APPS By Spirit"
            width={120}
            height={40}
            priority
          />
          <h1 className="text-4xl font-bold mt-6 font-[Clash Display]">Politique de Protection des Données (RGPD)</h1>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#621B93]">1. Introduction</h2>
            <p className="text-[#8987A1]">
              APPS By Spirit s'engage à protéger la vie privée des utilisateurs de notre site web et de nos services. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#621B93]">2. Données collectées</h2>
            <p className="text-[#8987A1] mb-4">Nous collectons les informations suivantes :</p>
            <ul className="list-disc pl-6 text-[#8987A1] space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Type d'organisation (particulier ou entreprise)</li>
              <li>Informations relatives au projet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#621B93]">3. Utilisation des cookies</h2>
            <p className="text-[#8987A1] mb-4">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Ces cookies nous permettent de :
            </p>
            <ul className="list-disc pl-6 text-[#8987A1] space-y-2">
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic du site</li>
              <li>Personnaliser votre expérience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#621B93]">4. Vos droits</h2>
            <p className="text-[#8987A1] mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 text-[#8987A1] space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#621B93]">5. Contact</h2>
            <p className="text-[#8987A1]">
              Pour toute question concernant notre politique de protection des données ou pour exercer vos droits, 
              vous pouvez nous contacter à l'adresse suivante :<br /><br />
              APPS By Spirit<br />
              Angré 7ème Tranche, rue L155<br />
              en Face Pharmacie 7Lys, Kheris Workspace<br />
              Abidjan, Côte d'Ivoire
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}