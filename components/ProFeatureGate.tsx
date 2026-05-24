'use client';

import { ReactNode } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ProFeatureGateProps = {
  isPro: boolean;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function ProFeatureGate({
  isPro,
  title = 'Alle details bekijken',
  description = 'Upgrade naar AutoRadar Pro om deze informatie te ontgrendelen.',
  children,
}: ProFeatureGateProps) {
  if (isPro) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-sm opacity-60">
        {children}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-slate-950/80 backdrop-blur-sm rounded-2xl border border-slate-800 flex items-center justify-center px-4">
          <div className="max-w-sm text-center space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-1">
              <Lock className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-white font-semibold text-base">{title}</h3>
            <p className="text-slate-400 text-sm">
              {description}
            </p>
            <div className="text-sm text-slate-400">
              <span className="font-semibold text-white">AutoRadar Pro</span>{' '}
              – €9,99 per maand, onbeperkt checks, volledige foto-analyse, historie
              en prijsvergelijking.
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition"
            >
              Ontgrendel met Pro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
