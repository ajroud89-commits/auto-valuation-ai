'use client';

import { ProFeatureGate } from '@/components/ProFeatureGate';

type ResultPageClientProps = {
  isPro: boolean;
};

export default function ResultPageClient({ isPro }: ResultPageClientProps) {
  const result = {
    score: 72,
    priceLabel: 'Iets boven marktgemiddelde',
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h2 className="text-lg font-semibold text-white mb-2">Samenvatting</h2>
          <p className="text-slate-300 mb-2">
            AI‑inschatting: <span className="font-semibold">{result.score}/100</span> – {result.priceLabel}.
          </p>
          {!isPro && (
            <p className="text-xs text-slate-500">
              Je gebruikt de gratis versie. Ontgrendel alle details met AutoRadar Pro.
            </p>
          )}
        </section>

        <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h2 className="text-lg font-semibold text-white mb-3">Foto-analyse</h2>
          <ProFeatureGate
            isPro={isPro}
            title="Gedetailleerde foto-analyse ontgrendelen"
            description="Zie automatisch gedetecteerde schade, roest en slijtage op alle foto's met AutoRadar Pro."
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="h-32 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 text-sm">
                Hier komen gemarkeerde foto's (schade, roest, etc.)
              </div>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>- Geen duidelijke schade zichtbaar aan carrosserie.</p>
                <p>- Lichte slijtage op bestuurdersstoel.</p>
                <p>- Velgen in goede staat, geen zichtbare stoeprandschade.</p>
              </div>
            </div>
          </ProFeatureGate>
        </section>

        <section className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h2 className="text-lg font-semibold text-white mb-3">Prijsvergelijking</h2>
          <p className="text-slate-400 text-sm mb-4">
            Gratis gebruikers zien alleen een globale inschatting. Pro toont concrete alternatieven.
          </p>
          <ProFeatureGate
            isPro={isPro}
            title="Bekijk vergelijkbare auto's en betere deals"
            description="Krijg een lijst met vergelijkbare auto's (merk, bouwjaar, km-stand) en zie welke goedkoper zijn."
          >
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Volkswagen Golf 1.5 TSI 2019 • 85.000 km</span>
                <span className="font-semibold text-green-400">€ 1.250 goedkoper</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Volkswagen Golf 1.5 TSI 2018 • 92.000 km</span>
                <span className="font-semibold text-green-400">€ 900 goedkoper</span>
              </div>
            </div>
          </ProFeatureGate>
        </section>
      </div>
    </div>
  );
}
