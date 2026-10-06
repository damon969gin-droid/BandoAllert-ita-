// BandoAllert Italia - Alerts API
// Cloudflare Worker + D1 foundation

export async function getUserAlerts(env, userId) {
  const result = await env.DB
    .prepare('SELECT * FROM alerts WHERE user_id = ? ORDER BY created_at DESC')
    .bind(userId)
    .all();

  return result.results || [];
}

export async function createAlert(env, userId, title, deadline) {
  await env.DB
    .prepare('INSERT INTO alerts (user_id, title, deadline) VALUES (?, ?, ?)')
    .bind(userId, title, deadline)
    .run();

  return { success: true };
}
