import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoRadar - Auto Valuation AI',
  description: 'Analyseer elke auto in seconden met AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
