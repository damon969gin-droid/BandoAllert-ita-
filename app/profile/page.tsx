export default function ProfilePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Profilo BandoAlert</h1>
      <div className="mt-6 rounded-xl border p-6">
        <p>Piano attuale: FREE</p>
        <p className="mt-2">Passa a Premium per sbloccare alert IA e funzioni avanzate.</p>
        <button className="mt-4 rounded-lg bg-black px-5 py-3 text-white">
          Attiva Premium
        </button>
      </div>
    </main>
  );
}
