export default function OpportunitiesPage() {
  const categories = ['Lavoro', 'Finanziamenti', 'Concorsi', 'Imprese'];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Ricerca Bandi</h1>
      <p className="mt-2">Trova opportunità e salva gli alert personali.</p>

      <div className="grid gap-4 mt-6">
        {categories.map((category) => (
          <div key={category} className="rounded border p-4">
            <h2 className="font-semibold">{category}</h2>
            <p>Filtri pronti per collegamento API e database D1.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
