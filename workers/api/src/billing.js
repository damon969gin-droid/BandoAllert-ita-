// BandoAlert Premium Billing
// Nessun dato bancario viene salvato nel codice.
// Il provider di pagamento viene collegato tramite variabili ambiente.

export async function createCheckout(userId, env) {
  if (!env.PAYMENT_SECRET_KEY) {
    throw new Error('Payment provider not configured');
  }

  return {
    status: 'ready',
    message: 'Checkout Premium da collegare al provider di pagamento',
    userId
  };
}

export function hasPremiumAccess(user) {
  return user?.plan === 'premium';
}
