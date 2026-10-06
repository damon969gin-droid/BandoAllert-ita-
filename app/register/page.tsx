export default function RegisterPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Crea account BandoAlert Italia</h1>
      <p className="mt-2">Registrazione gratuita per ricevere opportunità e avvisi.</p>

      <form className="mt-6 flex max-w-md flex-col gap-4">
        <input className="border p-3" placeholder="Nome" />
        <input className="border p-3" placeholder="Email" type="email" />
        <input className="border p-3" placeholder="Password" type="password" />
        <button className="rounded bg-black p-3 text-white">
          Registrati gratis
        </button>
      </form>
    </main>
  );
}
