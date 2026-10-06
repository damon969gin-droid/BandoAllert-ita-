export default function Dashboard(){
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Dashboard BandoAlert 🇮🇹</h1>
      <p className="mt-4">Le tue opportunità personali</p>

      <div className="mt-6 rounded-xl border p-5">
        <h2 className="font-bold">Profilo gratuito</h2>
        <p>Regione: Lazio</p>
        <p>Interessi: Bonus, Lavoro, Impresa</p>
      </div>

      <div className="mt-6 rounded-xl border p-5">
        <h2 className="font-bold">Prossime opportunità</h2>
        <p>✓ Bonus formazione digitale</p>
        <p>✓ Incentivo nuove imprese</p>
      </div>
    </main>
  )
}
