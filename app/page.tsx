'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Car, Search, TrendingDown, Shield, Zap, 
  CheckCircle, ArrowRight, Star, Users, Building2 
} from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!url) return;
    setIsAnalyzing(true);
    // Hier later je echte API-call naar /api/analyze
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm fixed w-full z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AutoRadar</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-400 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition">Prijzen</a>
            <a href="#zakelijk" className="text-slate-400 hover:text-white transition">Zakelijk</a>
          </nav>
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition">
            Inloggen
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              🚀 Nu live — Probeer gratis
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elke auto doorgelicht
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"> in seconden</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Plak een Marktplaats of AutoScout24 link. Onze AI analyseert foto's, 
              vergelijkt prijzen, checkt historie en geeft een eerlijke score.
            </p>
          </motion.div>

          {/* URL Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-2 flex gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-slate-500" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Plak hier je Marktplaats of AutoScout24 link..."
                    className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none py-3"
                  />
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition flex items-center gap-2 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analyseren...
                    </>
                  ) : (
                    <>
                      Analyseer
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              ✓ Geen account nodig &nbsp; ✓ 3 gratis checks per dag &nbsp; ✓ Resultaat in 30 seconden
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>12.500+ gebruikers</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              <span>89.000+ auto's geanalyseerd</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>4.8/5 beoordeling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Alles wat je moet weten, op één plek
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Van foto-analyse tot prijsvergelijking — wij doen het onderzoek, jij maakt de beslissing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "AI Foto-analyse",
                description: "Onze AI bekijkt elke foto op schade, roest, slijtage en inconsistenties die je zelf mist."
              },
              {
                icon: <TrendingDown className="w-6 h-6" />,
                title: "Prijsvergelijking",
                description: "Zie direct of de prijs eerlijk is en vind goedkopere alternatieven met vergelijkbare specs."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Historie-check",
                description: "APK-gebreken, eigenaren, kilometerstanden en terugroepacties — alles op een rij."
              },
              {
                icon: <Car className="w-6 h-6" />,
                title: "Technische specs",
                description: "Vermogen, verbruik, acceleratie, afmetingen. Alle fabrieksdata overzichtelijk gepresenteerd."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "AI-score",
                description: "Een gewogen score van 0-100 gebaseerd op prijs, conditie, historie en marktpositie."
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Koopadvies",
                description: "Concrete aandachtspunten en onderhandelingstips specifiek voor deze auto."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simpele prijzen, geen verrassingen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Gratis</h3>
              <div className="text-3xl font-bold text-white mb-6">€0</div>
              <ul className="space-y-3 mb-8 text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> 3 checks per dag</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Basis samenvatting</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Prijsindicatie</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> AI-score (alleen eindcijfer)</li>
              </ul>
              <button className="w-full py-3 border border-slate-700 text-white rounded-xl hover:bg-slate-800 transition">
                Gratis starten
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                Populair
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Pro</h3>
              <div className="text-3xl font-bold text-white mb-6">€9,99<span className="text-lg text-slate-400">/mnd</span></div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Onbeperkt checks</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Volledige foto-analyse</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> APK & eigenaar historie</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Tellerstandhistorie</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Uitleg AI-score + PDF-export</li>
              </ul>
              <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition">
                Start Pro
              </button>
            </div>

            {/* Business */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-semibold text-white">Zakelijk</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-6">Op maat</div>
              <ul className="space-y-3 mb-8 text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> API-toegang</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Bulk-analyses</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> White-label optie</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Dedicated support</li>
              </ul>
              <button className="w-full py-3 border border-slate-700 text-white rounded-xl hover:bg-slate-800 transition">
                Neem contact op
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">AutoRadar</span>
          </div>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Voorwaarden</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-slate-600 text-sm">© 2026 AutoRadar. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
