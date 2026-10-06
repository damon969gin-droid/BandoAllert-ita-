export default function BandoCard({ bando }: { bando: any }) {
  return (
    <div className="rounded-xl border p-5 shadow-sm">
      <h2 className="text-xl font-bold">{bando.titolo}</h2>
      <p>📍 {bando.regione}</p>
      <p>💰 {bando.valore}</p>
      <p>⏰ Scadenza: {bando.scadenza}</p>
      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
        Spiegami con IA
      </button>
    </div>
  );
}
