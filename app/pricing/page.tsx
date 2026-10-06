export default function Pricing(){
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">BandoAlert Premium</h1>
      <p className="mt-4 text-xl">6,99€/mese</p>

      <ul className="mt-6 space-y-2">
        <li>✓ Bandi illimitati</li>
        <li>✓ Alert automatici</li>
        <li>✓ Spiegazione IA dei documenti</li>
        <li>✓ Calendario scadenze</li>
      </ul>

      <button className="mt-8 rounded-xl bg-black px-6 py-3 text-white">
        Attiva Premium
      </button>
    </main>
  )
}
