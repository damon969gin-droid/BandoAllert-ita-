// BandoAlert Italia - Payment Webhook Handler
// Placeholder sicuro per collegamento provider pagamenti.
// Nessuna chiave privata o dato bancario viene salvato qui.

export async function handlePaymentWebhook(request, env) {
  const event = await request.json();

  if (!event || !event.type) {
    return new Response('Invalid event', { status: 400 });
  }

  // Qui verrà verificata la firma del provider tramite variabile segreta.
  // Dopo conferma pagamento:
  // 1. recupera utente
  // 2. aggiorna piano PREMIUM su D1

  return new Response(JSON.stringify({
    received: true,
    status: 'pending_verification'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
