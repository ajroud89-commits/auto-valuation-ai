import ResultPageClient from './ResultPageClient';

export default async function ResultPage() {
  // Later vervang je dit door echte abonnement-check (Stripe / database)
  const isPro = false;

  return <ResultPageClient isPro={isPro} />;
}
