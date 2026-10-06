export function requireAuth(session: { userId?: string } | null) {
  if (!session || !session.userId) {
    return {
      authenticated: false,
      redirect: '/login'
    };
  }

  return {
    authenticated: true,
    userId: session.userId
  };
}

export function requirePremium(plan: string) {
  return plan === 'PREMIUM';
}
