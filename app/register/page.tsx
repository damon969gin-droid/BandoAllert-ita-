"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      email: (form.email as HTMLInputElement).value,
      password: (form.password as HTMLInputElement).value,
    };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setMessage("Account creato con successo!");
      form.reset();
    } else {
      setMessage(result.error || "Errore registrazione");
    }
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">
        Crea account BandoAlert Italia
      </h1>

      <p className="mt-2">
        Registrazione gratuita per ricevere opportunità e avvisi.
      </p>

      <form
        onSubmit={handleRegister}
        className="mt-6 flex max-w-md flex-col gap-4"
      >
        <input
          name="nome"
          className="border p-3"
          placeholder="Nome"
        />

        <input
          name="email"
          className="border p-3"
          placeholder="Email"
          type="email"
          required
        />

        <input
          name="password"
          className="border p-3"
          placeholder="Password"
          type="password"
          required
        />

        <button className="rounded bg-black p-3 text-white">
          Registrati gratis
        </button>
      </form>

      {message && (
        <p className="mt-4 font-bold">
          {message}
        </p>
      )}
    </main>
  );
}
