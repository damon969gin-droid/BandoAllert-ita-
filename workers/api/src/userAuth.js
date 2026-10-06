// BandoAlert Italia - User Authentication
// Cloudflare Worker + D1 ready module

export async function registerUser(env, user) {
  const { email, passwordHash, name } = user;

  await env.DB.prepare(
    `INSERT INTO users (name, email, password_hash, plan)
     VALUES (?, ?, ?, 'FREE')`
  )
    .bind(name, email, passwordHash)
    .run();

  return {
    success: true,
    plan: 'FREE'
  };
}

export async function getUser(env, email) {
  const result = await env.DB.prepare(
    'SELECT id, name, email, plan FROM users WHERE email = ?'
  )
    .bind(email)
    .first();

  return result;
}
