export type UserSession = {
  id: string;
  email: string;
  plan: 'FREE' | 'PREMIUM';
};

const SESSION_KEY = 'bandoalert_session';

export function saveSession(session: UserSession) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}

export function getSession(): UserSession | null {
  if (typeof window === 'undefined') return null;

  const value = localStorage.getItem(SESSION_KEY);
  if (!value) return null;

  try {
    return JSON.parse(value) as UserSession;
  } catch {
    return null;
  }
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY);
  }
}
