// BandoAlert Italia - Subscription Manager
// Safe version: no payment credentials or personal financial data are stored here.

export async function activatePremium(env, userId) {
  if (!userId) {
    return { success: false, error: 'missing_user' };
  }

  await env.DB.prepare(
    'UPDATE users SET plan = ? WHERE id = ?'
  )
    .bind('PREMIUM', userId)
    .run();

  return {
    success: true,
    plan: 'PREMIUM'
  };
}

export function getPlanFeatures(plan) {
  if (plan === 'PREMIUM') {
    return [
      'AI explanation',
      'automatic alerts',
      'deadline calendar',
      'unlimited opportunities'
    ];
  }

  return [
    'basic search',
    'limited opportunities'
  ];
}
