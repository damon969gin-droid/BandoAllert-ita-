export default function LoginPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Accedi a BandoAlert Italia</h1>
      <p className="mt-4">Area utenti gratuita e Premium.</p>
      <form className="mt-6 space-y-4">
        <input className="border p-3 w-full" placeholder="Email" type="email" />
        <input className="border p-3 w-full" placeholder="Password" type="password" />
        <button className="border px-4 py-2">Accedi</button>
      </form>
    </main>
  );
}
